"use client";

import Flex from "@/components/flex";
import Typography from "@/components/typography";
import useFetchMarvelHero from "@/pods/hero/hooks/use-fetch-marvel-hero";

import useHeroId from "../hooks/use-hero-id";

import HeroComicContainer from "./hero-comic-container";
import styles from "./hero-comics-section.module.scss";

const HeroComicsSection = () => {
  const id = useHeroId();
  const { hero } = useFetchMarvelHero(id);

  return (
    <Flex direction="column" gap={4} className={styles["hero-comics-section"]}>
      <Typography variant="h1">Comics</Typography>
      <div className={styles["hero-comics-carousel"]}>
        {hero.data?.comics.items.map((comic) => (
          <HeroComicContainer
            key={comic.resourceURI}
            id={comic.resourceURI.match(/(\d+)$/)?.[1] ?? ""}
          />
        ))}
      </div>
    </Flex>
  );
};

export default HeroComicsSection;
