import { HTMLAttributes } from "react";

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
    variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "caption"
    | "subtitle1"
    | "subtitle2";
    color?: 'bg' | 'fg';
}