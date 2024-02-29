import { HTMLProps } from "react";

export interface SearchInputProps extends HTMLProps<HTMLInputElement> {
    containerClassName?: string;
    onSearch?: (value: string) => void;
    onDelayedTyping?: (value: string) => void;
    resultsCount?: number;
}
