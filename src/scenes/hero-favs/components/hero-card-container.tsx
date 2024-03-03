import { useMemo } from "react";

import HeroCard from "@/components/hero-card/hero-card";
import { HeroCardProps } from "@/components/hero-card/interfaces";
import useFavs from "@/pods/favs/hooks/use-favs";
import useFetchMarvelHero from "@/pods/hero/hooks/use-fetch-marvel-hero";

interface HeroCardContainerProps {
  id: string;
  search?: string;
}

const HeroCardContainer = ({ id, search }: HeroCardContainerProps) => {
  const { hero, isLoading, error } = useFetchMarvelHero(id);
  const {
    handlers: { toggle },
  } = useFavs();

  const hasData = Boolean(hero.data);
  const cardProps: HeroCardProps | null = useMemo(() => {
    if (error) return { status: "error" };

    if (isLoading) return { status: "loading" };

    if (
      hasData &&
      search &&
      !hero.data!.name.toLowerCase().includes(search.toLowerCase())
    )
      return null;

    if (hasData) {
      return {
        status: "success",
        id: hero.data!.id,
        name: hero.data!.name,
        imageSrc: `${hero.data!.thumbnail.path}.${
          hero.data!.thumbnail.extension
        }`,
        favVariant: "full-black",
        onFav: () => toggle(hero.data!.id),
      };
    }

    return null;
  }, [error, hasData, hero.data, isLoading, toggle, search]);

  return cardProps ? <HeroCard {...cardProps} /> : null;
};

export default HeroCardContainer;
