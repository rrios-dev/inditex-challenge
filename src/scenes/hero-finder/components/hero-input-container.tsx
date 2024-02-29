"use client";
import { useSearchParams } from "next/navigation";

import SearchInput from "@/components/search-input";
import useFetchMarvelHeroList from "@/pods/hero/hooks/use-fetch-marvel-hero-list";
import useAnimatedRouter from "@/pods/router/hooks/use-animated-router";

import styles from "./hero-input-container.module.scss";

const HeroInputcontainer = () => {
  const searchParams = useSearchParams();
  const { push } = useAnimatedRouter();
  const { heroList, isLoading, setSize, isValidating, ...rest } =
    useFetchMarvelHeroList(searchParams.get("search") ?? "");
  return (
    <SearchInput
      onDelayedTyping={(search) => push(search ? `/?search=${search}` : "/")}
      containerClassName={styles["search-input"]}
      resultsCount={heroList?.[0].data.total ?? 0}
    />
  );
};

export default HeroInputcontainer;
