import axios, { Options } from "redaxios";

import { Comic, Hero, MarvelPagination, MarvelResponse } from "./interfaces";
import publicMarvelInstanceService from "./public-instance.service";

interface CustomOptions extends Options {
  instance?: ReturnType<typeof axios.create>;
}

export const getHeroList = async (options?: CustomOptions) =>
  (options?.instance || publicMarvelInstanceService).get<
    MarvelResponse<MarvelPagination<Hero[]>>
  >("characters", options);

export const getHeroDetail = async (id: string, options?: CustomOptions) =>
  (options?.instance || publicMarvelInstanceService).get<
    MarvelResponse<MarvelPagination<[Hero]>>
  >(`characters/${id}`, options);

export const getComic = async (id: string, options?: CustomOptions) =>
  (options?.instance || publicMarvelInstanceService).get<
    MarvelResponse<MarvelPagination<[Comic]>>
  >(`comics/${id}`, options);
