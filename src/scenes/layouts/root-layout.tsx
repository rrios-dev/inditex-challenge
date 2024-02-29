import Header from "@/components/header/header";
import FavsProvider from "@/pods/favs/favs-provider";
import "@/theme/global.scss";
import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import { ReactNode } from "react";

import styles from "./root-layout.module.scss";

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SuperHero App | Inditex Challenge",
  description: "Created by @rriosdev <roberto@rrios.dev>",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => (
  <html lang="en">
    <body className={robotoCondensed.className}>
      <FavsProvider>
        <Header />
        <main className={styles["root-layout"]}>{children}</main>
      </FavsProvider>
    </body>
  </html>
);

export default RootLayout;
