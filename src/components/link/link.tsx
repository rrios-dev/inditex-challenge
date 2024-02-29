import useAnimatedRouter from "@/pods/router/hooks/use-animated-router";
import cls from "classnames";
import _Link from "next/link";
import { forwardRef } from "react";

import { LinkProps } from "./interfaces";
import styles from "./link.module.scss";

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, className, onClick, ...props }, ref) => {
    const { push } = useAnimatedRouter();
    return (
      <_Link
        ref={ref}
        href={href}
        className={cls(styles.link, className)}
        onClick={(e) => {
          push(href.toString());
          onClick?.(e);
        }}
        {...props}
      />
    );
  }
);

Link.displayName = "Link";

export default Link;
