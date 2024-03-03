import axios, { Options } from "redaxios";
import { mergeDeep } from "remeda";

import { Comic, Hero, MarvelPagination, MarvelResponse } from "./interfaces";
import publicMarvelInstanceService from "./public-instance.service";

type CustomOptions = Options & {
  instance?: ReturnType<typeof axios.create>;
};

interface GetHeroListInput {
  search?: string;
  offset?: number;
  limit?: number;
}
export const getHeroList = async (
  input?: GetHeroListInput,
  options: CustomOptions = {}
) =>
  (options?.instance || publicMarvelInstanceService).get<
    MarvelResponse<MarvelPagination<Hero[]>>
  >(
    "characters",
    mergeDeep(options, {
      params: {
        limit: input?.limit ?? 50,
        offset: input?.offset ?? 0,
        ...(input?.search && { nameStartsWith: input.search }),
      },
    })
  );

export const getHeroDetail = async (id: string, options?: CustomOptions) =>
  (options?.instance || publicMarvelInstanceService).get<
    MarvelResponse<MarvelPagination<[Hero]>>
  >(`characters/${id}`, options);

export const getComic = async (id: string, options?: CustomOptions) =>
  (options?.instance || publicMarvelInstanceService).get<
    MarvelResponse<MarvelPagination<[Comic]>>
  >(`comics/${id}`, options);
