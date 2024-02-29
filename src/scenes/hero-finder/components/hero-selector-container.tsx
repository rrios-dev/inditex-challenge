"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useIntersectionObserver } from "usehooks-ts";

import Flex from "@/components/flex";
import { HeroCardProps } from "@/components/hero-card/interfaces";
import HeroSelector from "@/components/hero-selector/hero-selector";
import Spinner from "@/components/spinner";
import useFavs from "@/pods/favs/hooks/use-favs";
import useFetchMarvelHeroList from "@/pods/hero/hooks/use-fetch-marvel-hero-list";

const HeroSelectorContainer = () => {
  const searchParams = useSearchParams();
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });
  const { heroList, isLoading, setSize, isValidating } = useFetchMarvelHeroList(
    searchParams.get("search") ?? ""
  );
  const {
    favs,
    handlers: { toggle },
  } = useFavs();

  const items =
    heroList?.reduce<HeroCardProps[]>((acc, chunk) => {
      chunk.data.results.forEach((v) => {
        acc.push({
          id: v.id,
          imageSrc: `${v.thumbnail.path}.${v.thumbnail.extension}`,
          name: v.name,
          favStatus: favs.ids.includes(v.id) ? "full-black" : "empty",
          onFav: toggle,
        });
      });

      return acc;
    }, []) || [];

  useEffect(() => {
    if (isIntersecting && !isValidating && !isLoading) {
      setSize((x) => x + 1);
    }
  }, [isIntersecting, setSize, isValidating, isLoading]);

  const hasMoreToLoad = items.length < (heroList?.[0].data.total || 0);

  return (
    <Flex direction="column" gap={4}>
      <HeroSelector items={items} />
      {hasMoreToLoad && (
        <div
          ref={ref}
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "transparent",
            pointerEvents: "none",
          }}
        />
      )}
      {(isLoading || isValidating) && (
        <Flex align="center" justify="center">
          <Spinner />
        </Flex>
      )}
    </Flex>
  );
};

export default HeroSelectorContainer;
