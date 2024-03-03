"use client";
import { useSearchParams } from "next/navigation";

import SearchInput from "@/components/search-input";
import useFetchMarvelHeroList from "@/pods/hero/hooks/use-fetch-marvel-hero-list";
import useAnimatedRouter from "@/pods/router/hooks/use-animated-router";

const HeroInputcontainer = () => {
  const searchParams = useSearchParams();
  const defaultSearch = searchParams.get("search") ?? "";
  const { push } = useAnimatedRouter();
  const { heroList, isLoading, setSize, isValidating } =
    useFetchMarvelHeroList(defaultSearch);
  return (
    <SearchInput
      onDelayedTyping={(search) => push(search ? `/?search=${search}` : "/")}
      resultsCount={heroList?.[0].data.total ?? 0}
      defaultValue={defaultSearch}
    />
  );
};

export default HeroInputcontainer;
