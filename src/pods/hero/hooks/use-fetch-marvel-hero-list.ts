import useSWR from "swr/infinite";

import { getHeroList } from "@/pods/providers/marvel/public-marvel.service";

const fetcher = async ({ search, offset }: any) => {
  const response = await getHeroList({
    params: {
      limit: 50,
      offset: offset * 50,
      ...(search && { nameStartsWith: search }),
    },
  });

  return response.data;
};

const useFetchMarvelHeroList = (search = "") => {
  const { data, ...rest } = useSWR(
    (offset) => ({
      key: "marvel-hero-list",
      offset,
      search,
    }),
    fetcher,
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
