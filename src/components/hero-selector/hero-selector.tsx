import HeroCard from "@/components/hero-card/hero-card";

import styles from "./hero-selector.module.scss";
import { HeroSelectorProps } from "./interfaces";

const HeroSelector = ({ items }: HeroSelectorProps) => (
  <ul className={styles["hero-selector"]}>
    {items.map((itemProps) => (
      <li key={itemProps.id}>
        <HeroCard {...itemProps} />
      </li>
    ))}
    {items.length < 7 &&
      Array.from({ length: 7 - items.length }).map((_, index) => (
        <li key={index} />
      ))}
  </ul>
);

export default HeroSelector;
