import { unstable_serialize } from "swr/infinite";

import Flex from "@/components/flex";
import { getHeroList } from "@/pods/providers/marvel/marvel.service";
import privateMarvelInstanceService from "@/pods/providers/marvel/private-instance.service";
import SWRProvider from "@/pods/swr/swr-provider";

import HeroInputcontainer from "./components/hero-input-container";
import HeroSelectorContainer from "./components/hero-selector-container";
import styles from "./hero-finder.scene.module.scss";

type Props = {
  searchParams: { search?: string };
};

const HeroFinder = async ({ searchParams: { search } }: Props) => {
  const heroList = await getHeroList(
    { search },
    {
      instance: privateMarvelInstanceService,
    }
  );

  const key = unstable_serialize(() => ({
    key: "marvel-hero-list",
    offset: 0,
    search: search || "",
  }));

  return (
    <Flex
      as="main"
      direction="column"
      gap={6}
      className={styles["hero-finder"]}
    >
      <SWRProvider
        fallback={{
          [key]: [heroList.data],
        }}
      >
        <HeroInputcontainer />
        <HeroSelectorContainer />
      </SWRProvider>
    </Flex>
  );
};

export default HeroFinder;
