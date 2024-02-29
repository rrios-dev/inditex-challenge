import Flex from "@/components/flex";

import HeroInputcontainer from "./components/hero-input-container";
import HeroSelectorContainer from "./components/hero-selector-container";
import styles from "./hero-finder.scene.module.scss";

const HeroFinder = () => (
  <Flex direction="column" gap={6} className={styles["hero-finder"]}>
    <HeroInputcontainer />
    <HeroSelectorContainer />
  </Flex>
);

export default HeroFinder;
