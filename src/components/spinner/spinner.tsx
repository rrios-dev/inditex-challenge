import cls from "classnames";

import { SpinnerProps } from ".";
import styles from "./spinner.module.scss";

const Spinner = ({ size = "md" }: SpinnerProps) => (
  <div className={cls(styles.spinner, styles[`size-${size}`])} />
);

export default Spinner;
