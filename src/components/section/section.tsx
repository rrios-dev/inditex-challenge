import cls from "classnames";

import Flex from "../flex";
import Typography from "../typography";

import { SectionProps } from "./interfaces";
import styles from "./section.module.scss";
const Section = ({
  title,
  direction = "column",
  gap = 12,
  children,
  className,
  ...props
}: SectionProps) => (
  <Flex
    gap={gap}
    direction={direction}
    className={cls(styles.section, className)}
    {...props}
  >
    {title && (
      <Typography className={styles.title} variant="h2">
        {title}
      </Typography>
    )}
    {children}
  </Flex>
);

export default Section;
