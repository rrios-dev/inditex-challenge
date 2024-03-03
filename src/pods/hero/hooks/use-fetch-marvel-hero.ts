import useSWR from "swr/immutable";

import { getHeroDetail } from "@/pods/providers/marvel/marvel.service";

const useFetchMarvelHero = (id: string) => {
  const { data, ...rest } = useSWR(
    ["hero", id],
    async ([, id]) => (await getHeroDetail(id)).data
  );

  return {
    ...rest,
    hero: {
      ...data,
      data: data?.data?.results[0],
    },
  };
};

export default useFetchMarvelHero;
