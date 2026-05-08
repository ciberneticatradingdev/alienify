# ALIENIFY 👽

Transform yourself into an alien with AI.

Upload a photo → AI alienifies you → Download your new identity.

![Alienify](public/samples/sample_01.png)

## How It Works

1. Upload a photo of yourself (or anyone, we don't judge)
2. Our AI analyzes the photo and transforms your features
3. You get back a glorious alien-human hybrid
4. Share it. Embrace the alien within.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript** + **Tailwind CSS**
- **OpenAI gpt-image-2** for image transformation

## Setup

```bash
# Clone
git clone https://github.com/ciberneticatradingdev/alienify.git
cd alienify

# Install
npm install

# Set your OpenAI API key
cp .env.example .env.local
# Edit .env.local and add your OPENAI_API_KEY

# Run
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

| Variable | Description |
|----------|-------------|
| `OPENAI_API_KEY` | Your OpenAI API key (needs gpt-image-2 access) |
| `NEXT_PUBLIC_CONTRACT_ADDRESS` | Token contract address (optional) |

## Deploy

Works out of the box on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ciberneticatradingdev/alienify)

## License

MIT — do whatever you want, just don't blame us if you can't stop alienifying people.
