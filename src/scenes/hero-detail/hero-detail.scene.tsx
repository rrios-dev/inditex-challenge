import Flex from "@/components/flex";

import HeroComicsSection from "./components/hero-comics-section";
import HeroHeaderSection from "./components/hero-header-section";

const HeroDetailScene = () => (
  <Flex direction="column" gap={6}>
    <HeroHeaderSection />
    <HeroComicsSection />
  </Flex>
);

export default HeroDetailScene;
