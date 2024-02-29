import Image from "next/image";
import { forwardRef, useMemo } from "react";

import { HeartProps } from "./interfaces";

const Heart = forwardRef<HTMLImageElement, HeartProps>(
  ({ status = "empty", alt, ...props }, ref) => {
    const data = useMemo(() => {
      switch (status) {
        case "empty":
          return {
            src: "/icons/heart-empty.svg",
            alt: "Empty heart",
          };
        case "full-black":
          return {
            src: "/icons/heart-full-black.svg",
            alt: "Full heart",
          };
        case "full-white":
          return {
            src: "/icons/heart-full-white.svg",
            alt: "Full heart",
          };
      }
    }, [status]);

    return (
      <Image
        width={24}
        height={22}
        src={data.src}
        alt={alt || data.alt}
        ref={ref}
        {...props}
      />
    );
  }
);

Heart.displayName = "Heart";

export default Heart;
