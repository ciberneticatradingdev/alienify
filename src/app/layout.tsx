import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALIENIFY 👽 | Transform Yourself Into an Alien",
  description: "Upload your photo and let AI transform you into a magnificent alien being. The internet's favorite alienification tool.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "ALIENIFY 👽",
    description: "Transform yourself into an alien with AI",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 1024,
        alt: "ALIENIFY - AI Alien Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALIENIFY 👽",
    description: "Transform yourself into an alien with AI",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
