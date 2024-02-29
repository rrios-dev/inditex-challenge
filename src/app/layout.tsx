import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import 'normalize.css';

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SuperHero App | Inditex Challenge",
  description: "Created by @rriosdev <roberto@rrios.dev>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>{children}</body>
    </html>
  );
}
