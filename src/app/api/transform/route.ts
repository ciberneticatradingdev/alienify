import { NextRequest, NextResponse } from "next/server";
import OpenAI, { toFile } from "openai";
import sharp from "sharp";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key not configured. Add OPENAI_API_KEY to .env.local" },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const imageFile = formData.get("image") as File | null;

    if (!imageFile) {
      return NextResponse.json(
        { error: "No image uploaded" },
        { status: 400 }
      );
    }

    if (!imageFile.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Invalid file type. Please upload an image." },
        { status: 400 }
      );
    }

    if (imageFile.size > 20 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Image too large. Maximum 20MB." },
        { status: 400 }
      );
    }

    // Convert uploaded file to buffer and downscale for speed
    const bytes = await imageFile.arrayBuffer();
    const rawBuffer = Buffer.from(bytes);

    // Resize to max 1024px on longest side + convert to JPEG for smaller payload
    const optimizedBuffer = await sharp(rawBuffer)
      .resize(1024, 1024, { fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 85 })
      .toBuffer();

    const userFile = await toFile(optimizedBuffer, "user_photo.jpg", {
      type: "image/jpeg",
    });

    const prompt = `Edit this image to create an "alienified" version. This is a meme-style transformation where the subject gets turned into a classic alien creature.

CRITICAL RULES:
- Keep the EXACT same composition, pose, framing, and background from the original image
- Keep recognizable elements: clothing, accessories, setting
- Transform the face and body into alien features: large black almond-shaped eyes, smooth green skin, elongated oval head, small flat nose, thin lips, no visible ears, slender body
- The alien should look like the classic "little green man" — think Roswell-style alien with a comedic twist
- If the subject is wearing clothes or accessories (sunglasses, hats, shirts), keep them on the alien version for a funny contrast
- Style: meme-worthy CGI alien, like a high-quality 3D render — vibrant green skin, glossy big black eyes
- The result should be funny and meme-worthy
- DO NOT change the background or setting significantly
- DO NOT create a completely new image - this must be clearly a transformation of the input`;

    const response = await openai.images.edit({
      model: "gpt-image-2",
      image: userFile,
      prompt,
      size: "1024x1024",
      quality: "low",
    });

    const generatedImage = response.data?.[0];
    if (!generatedImage?.b64_json) {
      return NextResponse.json(
        { error: "Failed to generate alienified image" },
        { status: 500 }
      );
    }

    const resultDataUrl = `data:image/png;base64,${generatedImage.b64_json}`;

    return NextResponse.json({ image: resultDataUrl });
  } catch (error: unknown) {
    console.error("Alienification error:", error);

    if (error instanceof OpenAI.APIError) {
      if (error.status === 429) {
        return NextResponse.json(
          { error: "Rate limited. Please wait a moment and try again." },
          { status: 429 }
        );
      }
      if (error.status === 403) {
        return NextResponse.json(
          { error: "OpenAI API access denied. Organization verification may be required." },
          { status: 403 }
        );
      }
      return NextResponse.json(
        { error: `OpenAI API error: ${error.message}` },
        { status: error.status || 500 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error during alienification" },
      { status: 500 }
    );
  }
}
