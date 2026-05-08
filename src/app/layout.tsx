import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALIENIFY 👽 | Transform Yourself Into an Alien",
  description: "Upload your photo and let AI transform you into a magnificent alien being. The internet's favorite alienification tool.",
  openGraph: {
    title: "ALIENIFY 👽",
    description: "Transform yourself into an alien with AI",
    type: "website",
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
