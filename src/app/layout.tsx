import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head"; // Import Head component from next/head
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Overwatch WhatsApp Group Chat",
  description: "Join Now",
  // Add your OpenGraph image URL here
  // openGraph: {
  //   images: [
  //     {
  //       url: "https://pbs.twimg.com/media/Ff68VklaMAAB1uJ?format=jpg&name=large",
  //       width: 1200,
  //       height: 630,
  //       alt: "Overwatch WhatsApp Group Chat",
  //     },
  //   ],
  // },
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
