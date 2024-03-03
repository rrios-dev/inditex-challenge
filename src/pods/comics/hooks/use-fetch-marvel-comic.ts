"use client";
import useSWR from "swr/immutable";

import { getComic } from "@/pods/providers/marvel/marvel.service";

const useFetchMarvelComic = (id?: string) => {
  const { data, ...rest } = useSWR(
    id || null,
    async (id: string) => (await getComic(id)).data
  );

  return {
    ...rest,
    comic: {
      ...data,
      data: data?.data?.results[0],
    },
  };
};

export default useFetchMarvelComic;
