import { forwardRef } from "react";

import styles from "./hero-selector.module.scss";
import { HeroSelectorProps } from "./interfaces";

// TODO: Add virtualized list
const HeroSelector = forwardRef<HTMLUListElement, HeroSelectorProps>(
  ({ children }, ref) => (
    <ul className={styles["hero-selector"]} ref={ref}>
      {children}
      {children.length < 7 &&
        Array.from({ length: 7 - children.length }).map((_, index) => (
          <li data-block key={index} />
        ))}
    </ul>
  )
);

HeroSelector.displayName = "HeroSelector";

export default HeroSelector;
