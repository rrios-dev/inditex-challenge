"use client";
import { forwardRef } from "react";

import Link from "@/components/link";
import useAnimatedRouter from "@/pods/router/hooks/use-animated-router";

import { AnimatedLinkProps } from "./interfaces";

const AnimatedLink = forwardRef<HTMLAnchorElement, AnimatedLinkProps>(
  ({ href, onClick, ...props }, ref) => {
    const { push } = useAnimatedRouter();
    return (
      <Link
        ref={ref}
        href={href}
        onClick={(e) => {
          push(href.toString());
          onClick?.(e);
        }}
        {...props}
      />
    );
  }
);

AnimatedLink.displayName = "AnimatedLink";

export default AnimatedLink;
