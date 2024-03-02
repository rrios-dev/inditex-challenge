import useSWR from "swr/immutable";

import { getCharacter } from "@/pods/providers/marvel/public-marvel.service";

const useFetchMarvelHero = (id: string) => {
  const { data, ...rest } = useSWR(
    id.toString(),
    async (id: string) => (await getCharacter(id)).data
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
