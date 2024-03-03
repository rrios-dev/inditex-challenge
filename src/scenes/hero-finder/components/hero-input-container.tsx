"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import SearchInput from "@/components/search-input";
import useFetchMarvelHeroList from "@/pods/hero/hooks/use-fetch-marvel-hero-list";

const HeroInputcontainer = () => {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const defaultSearch = searchParams.get("search") ?? "";
  const { push } = useRouter();
  const { heroList } = useFetchMarvelHeroList(defaultSearch);

  useEffect(() => {
    setLoading(false);
  }, [defaultSearch]);

  return (
    <SearchInput
      isLoading={loading}
      onDelayedTyping={(search) => {
        push(search ? `/?search=${search}` : "/");
        setLoading(true);
      }}
      resultsCount={heroList?.[0].data.total ?? 0}
      defaultValue={defaultSearch}
    />
  );
};

export default HeroInputcontainer;
