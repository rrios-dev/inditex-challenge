import { ImageProps } from "next/image";

export interface HeartProps extends Omit<ImageProps, "src" | "alt"> {
  variant?: "empty" | "full-black" | "full-white";
  alt?: string;
}
