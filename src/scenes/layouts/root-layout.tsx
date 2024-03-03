import cls from "classnames";
import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import { ReactNode } from "react";

import Header from "@/components/header/header";
import FavsProvider from "@/pods/favs/favs-provider";
import makeAppTitle from "@/pods/seo/utils/make-app-title";
import "@/theme/global.scss";

import styles from "./root-layout.module.scss";

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: makeAppTitle("Finder"),
  description: "Marvel Heroes from the Marvel API.",
  icons: {
    icon: "/favicon.ico",
  },
  authors: [
    {
      name: "Marvel",
      url: "https://www.marvel.com",
    },
    {
      name: "Roberto Ríos",
      url: "https://rrios.dev",
    },
  ],
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => (
  <html lang="en">
    <body className={cls(robotoCondensed.className, styles.root)}>
      <FavsProvider>
        <Header />
        {children}
      </FavsProvider>
    </body>
  </html>
);

export default RootLayout;
