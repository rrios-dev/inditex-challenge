import HeroCard from "@/components/hero-card/hero-card";

import styles from "./hero-selector.module.scss";
import { HeroSelectorProps } from "./interfaces";

const HeroSelector = ({ items }: HeroSelectorProps) => {
  return (
    <ul className={styles["hero-selector"]}>
      {items.map((itemProps) => (
        <li key={itemProps.id}>
          <HeroCard {...itemProps} />
        </li>
      ))}
    </ul>
  );
};

export default HeroSelector;
