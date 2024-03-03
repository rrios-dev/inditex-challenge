import { Metadata } from "next";

import makeAppTitle from "@/pods/seo/utils/make-app-title";

const metadata: Metadata = {
  title: makeAppTitle("Favs"),
};

export default metadata;
