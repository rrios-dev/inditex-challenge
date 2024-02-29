import cls from "classnames";
import { HTMLAttributes, forwardRef } from "react";

import styles from "./button-base.module.scss";

const ButtonBase = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => (
  <button
    {...props}
    className={cls(styles["button-base"], className)}
    ref={ref}
  >
    {children}
  </button>
));

ButtonBase.displayName = "ButtonBase";

export default ButtonBase;
