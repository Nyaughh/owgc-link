import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head"; // Import Head component from next/head
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Overwatch WhatsApp Group Chat",
  description: "Join Now",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Include the Head component and set metadata */}
      <Head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        {/* Loop over images to include multiple images */}
        {metadata.openGraph.images.map((image, index) => (
          <meta property="og:image" key={index} content={image.url} />
        ))}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
