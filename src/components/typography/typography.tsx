"use client";
import cls from "classnames";
import { createElement, forwardRef, useMemo } from "react";

import { TypographyProps } from "./interfaces";
import styles from "./typography.module.scss";

const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ children, className, variant = "body1", ...props }, ref) => {
    const tag = useMemo(
      () => (variant.match(/^h\d/) ? variant : "p"),
      [variant]
    );
    return createElement(
      tag,
      {
        ...props,
        className: cls(
          styles.typography,
          `${styles.variant} ${styles[variant]}`,
          className
        ),
        ref,
      },
      children
    );
  }
);

Typography.displayName = "Typography";

export default Typography;
