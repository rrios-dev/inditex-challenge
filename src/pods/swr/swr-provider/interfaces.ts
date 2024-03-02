import { ReactNode } from "react";

export interface SWRProviderProps {
  children: ReactNode;
  fallback: Record<string, unknown>;
}
