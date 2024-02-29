import cls from "classnames";

import styles from "./spinner.module.scss";

import { SpinnerProps } from ".";

const Spinner = ({ size = "md" }: SpinnerProps) => (
  <div className={cls(styles.spinner, styles[`size-${size}`])} />
);

export default Spinner;
