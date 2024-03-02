import { HTMLProps } from "react";

export type FlexProps<T extends JSX.IntrinsicElements> = HTMLProps<T> & {
    as?: T | keyof JSX.IntrinsicElements;
    direction?: 'row' | 'column';
    justify?: 'start' | 'end' | 'center' | 'between' | 'around';
    align?: 'start' | 'end' | 'center' | 'stretch';
    wrap?: 'wrap' | 'nowrap';
    gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}