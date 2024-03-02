"use client";

import Section from "@/components/section";
import Typography from "@/components/typography";
import useFetchMarvelHero from "@/pods/hero/hooks/use-fetch-marvel-hero";

import useHeroId from "../hooks/use-hero-id";

import HeroComicContainer from "./hero-comic-container";
import styles from "./hero-comics-section.module.scss";

const HeroComicsSection = () => {
  const id = useHeroId();
  const { hero } = useFetchMarvelHero(id);

  const comics = hero.data?.comics.items;

  return (
    <Section title="Comics" className={styles["hero-comics-section"]}>
      {Boolean(comics?.length) && (
        <div className={styles["hero-comics-carousel"]}>
          {comics
            ? comics.map((comic, idx) => (
                <HeroComicContainer
                  key={comic.resourceURI ?? `skeleton-$${idx}`}
                  id={comic.resourceURI.match(/(\d+)$/)?.[1] ?? ""}
                />
              ))
            : Array.from({ length: 10 })
                .map(() => ({ resourceURI: "" }))
                .map((_, idx) => (
                  <HeroComicContainer key={`skeleton-${idx}`} />
                ))}
        </div>
      )}
      {comics?.length === 0 && (
        <Typography variant="body1">No comics available</Typography>
      )}
    </Section>
  );
};

export default HeroComicsSection;
