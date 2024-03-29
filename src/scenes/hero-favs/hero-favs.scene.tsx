"use client";
import { useState } from "react";
import { useIsClient } from "usehooks-ts";

import Flex from "@/components/flex";
import HeroCard from "@/components/hero-card/hero-card";
import HeroSelector from "@/components/hero-selector";
import SearchInput from "@/components/search-input";
import useFavs from "@/pods/favs/hooks/use-favs";

import styles from "./hero-favs.scene.module.scss";

const HeroFavsScene = () => {
  const {
    favs,
    handlers: { toggle },
  } = useFavs();
  const isClient = useIsClient();
  const [search, setSearch] = useState("");

  const items = favs.items.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Flex as="main" direction="column" gap={6} className={styles["hero-favs"]}>
      <h1 className="sr-only">Hero Favs</h1>
      <SearchInput
        onDelayedTyping={(search) => setSearch(search)}
        resultsCount={isClient ? items.length : null}
      />
      {isClient && (
        <HeroSelector>
          {items.map((item) => (
            <li key={item.id}>
              <HeroCard
                id={item.id}
                name={item.name as string}
                imageSrc={item.image as string}
                status="success"
                favVariant="full-black"
                onFav={() => toggle({ id: item.id })}
              />
            </li>
          ))}
        </HeroSelector>
      )}
    </Flex>
  );
};

export default HeroFavsScene;
