import { ImageProps } from "next/image";

export interface HeartProps extends Omit<ImageProps, 'src' | 'alt'> {
    status?: 'empty' | 'full-black' | 'full-white'
    alt?: string;
}