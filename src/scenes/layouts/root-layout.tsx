import Header from "@/components/header/header";
import "@/theme/global.scss";
import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SuperHero App | Inditex Challenge",
  description: "Created by @rriosdev <roberto@rrios.dev>",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className={robotoCondensed.className}>
      <Header />
      {children}
    </body>
  </html>
);

export default RootLayout;
