"use client";

import HeroSelector from "@/components/hero-selector/hero-selector";
import useFavs from "@/pods/favs/hooks/use-favs";
import useFetchMarvelHeroList from "@/pods/hero/hooks/use-fetch-marvel-hero-list";

const HeroSelectorContainer = () => {
  const { heroList } = useFetchMarvelHeroList();
  const {
    favs,
    handlers: { toggle },
  } = useFavs();
  return (
    <HeroSelector
      items={
        heroList?.data?.results?.map((v) => ({
          id: v.id,
          imageSrc: `${v.thumbnail.path}.${v.thumbnail.extension}`,
          name: v.name,
          favStatus: favs.ids.includes(v.id) ? "full-black" : "empty",
          onFav: toggle,
        })) || []
      }
    />
  );
};

export default HeroSelectorContainer;
