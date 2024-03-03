"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useIntersectionObserver } from "usehooks-ts";

import Flex from "@/components/flex";
import HeroCard from "@/components/hero-card/hero-card";
import { HeroCardProps } from "@/components/hero-card/interfaces";
import HeroSelector from "@/components/hero-selector/hero-selector";
import Spinner from "@/components/spinner";
import useFavs from "@/pods/favs/hooks/use-favs";
import useFetchMarvelHeroList from "@/pods/hero/hooks/use-fetch-marvel-hero-list";

import styles from "./hero-selector-container.module.scss";

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
        const heroImage = `${v.thumbnail.path}.${v.thumbnail.extension}`;
        acc.push({
          status: "success",
          id: v.id,
          imageSrc: heroImage,
          name: v.name,
          favVariant: favs.items.find((x) => x.id === v.id)
            ? "full-black"
            : "empty",
          onFav: () => toggle({ id: v.id, name: v.name, image: heroImage }),
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
      <HeroSelector>
        {items.map((item, idx) => (
          <li key={item.status === "success" ? item.id : idx}>
            <HeroCard {...item} />
          </li>
        ))}
      </HeroSelector>
      {hasMoreToLoad && (
        <div
          ref={ref}
          className={styles["hero-selector-container-load-more"]}
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
