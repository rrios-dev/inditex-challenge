import useSWR from "swr/infinite";

import { getHeroList } from "@/pods/providers/marvel/marvel.service";

const useFetchMarvelHeroList = (search = "") => {
  const { data, ...rest } = useSWR(
    (offset) => ({
      key: "marvel-hero-list",
      offset,
      search,
    }),
    async (p) =>
      (
        await getHeroList({
          offset: p.offset * 50,
          search: p.search,
        })
      ).data,
    {
      revalidateAll: false,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateFirstPage: false,
    }
  );

  return {
    ...rest,
    heroList: data,
  };
};

export default useFetchMarvelHeroList;
