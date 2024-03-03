import { PublicConfiguration } from "swr/_internal";
import useSWR from "swr/infinite";

import { getHeroList } from "@/pods/providers/marvel/marvel.service";

const useFetchMarvelHeroList = (
  search = "",
  options?: Partial<Pick<PublicConfiguration, "onSuccess" | "onError">>
) => {
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
      revalidateOnReconnect: false,
      shouldRetryOnError: false,
      ...options,
    }
  );

  return {
    ...rest,
    heroList: data,
  };
};

export default useFetchMarvelHeroList;
