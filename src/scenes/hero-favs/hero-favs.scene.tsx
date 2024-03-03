"use client";
import { useState } from "react";

import Flex from "@/components/flex";
import HeroSelector from "@/components/hero-selector";
import SearchInput from "@/components/search-input";
import useFavs from "@/pods/favs/hooks/use-favs";

import HeroCardContainer from "./components/hero-card-container";
import styles from "./hero-favs.scene.module.scss";

const HeroFavsScene = () => {
  const { favs } = useFavs();
  const [search, setSearch] = useState("");

  return (
    <Flex as="main" direction="column" gap={6} className={styles["hero-favs"]}>
      <SearchInput onDelayedTyping={(search) => setSearch(search)} />
      <HeroSelector>
        {favs.ids.map((id) => (
          <li key={id}>
            <HeroCardContainer search={search} id={id.toString()} />
          </li>
        ))}
      </HeroSelector>
    </Flex>
  );
};

export default HeroFavsScene;
