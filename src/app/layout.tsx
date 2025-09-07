import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TopKale - The Ultimate Discord Farming Bot",
  description: "Join thousands of farmers and start growing your kale empire today! Plant, water, and harvest your virtual kale crops with TopKale Discord bot.",
  keywords: ["Discord bot", "Kale token", "farming", "crypto", "blockchain", "DeFi", "TopKale"],
  authors: [{ name: "Pau" }],
  creator: "Pau",
  publisher: "TopKale",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.topkale.xyz",
    title: "TopKale - The Ultimate Discord Farming Bot",
    description: "Join thousands of farmers and start growing your kale empire today! Plant, water, and harvest your virtual kale crops with TopKale Discord bot.",
    siteName: "TopKale",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/a19a784d-44be-4f7d-b863-a169e933c056.png?token=LMJU3Rm2yhs6YlV9ZtTO1gEbvCRgXZsDGKJmhoNHbxM&height=630&width=1200&expires=33293284715",
        width: 1200,
        height: 630,
        alt: "TopKale Discord Bot - The Ultimate Farming Bot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TopKale - The Ultimate Discord Farming Bot",
    description: "Join thousands of farmers and start growing your kale empire today! Plant, water, and harvest your virtual kale crops with TopKale Discord bot.",
    images: ["https://opengraph.b-cdn.net/production/images/a19a784d-44be-4f7d-b863-a169e933c056.png?token=LMJU3Rm2yhs6YlV9ZtTO1gEbvCRgXZsDGKJmhoNHbxM&height=630&width=1200&expires=33293284715"],
    creator: "@kl0ren",
    site: "@kl0ren",
  },
  metadataBase: new URL("https://www.topkale.xyz"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
