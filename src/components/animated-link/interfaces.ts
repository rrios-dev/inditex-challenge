import { LinkProps } from "next/link";
import { ReactNode } from "react";

export interface AnimatedLinkProps extends LinkProps {
    children: ReactNode;
    className?: string;
}