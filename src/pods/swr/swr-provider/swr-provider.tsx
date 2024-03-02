"use client";
import { SWRConfig } from "swr";

import { SWRProviderProps } from "./interfaces";

const SWRProvider = ({ children, fallback }: SWRProviderProps) => (
  <SWRConfig value={{ fallback }}>{children}</SWRConfig>
);

export default SWRProvider;
