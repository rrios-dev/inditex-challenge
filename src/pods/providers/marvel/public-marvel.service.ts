import { Options } from "redaxios";

import { Comic, Hero, MarvelPagination, MarvelResponse } from "./interfaces";
import publicMarvelInstanceService from "./public-instance.service";

export const getCharacters = async (options?: Options) =>
  publicMarvelInstanceService.get<MarvelResponse<MarvelPagination<Hero[]>>>(
    "characters",
    options
  );

export const getCharacter = async (id: string, options?: Options) =>
  publicMarvelInstanceService.get<MarvelResponse<MarvelPagination<[Hero]>>>(
    `characters/${id}`,
    options
  );

export const getComic = async (id: string, options?: Options) =>
  publicMarvelInstanceService.get<MarvelResponse<MarvelPagination<[Comic]>>>(
    `comics/${id}`,
    options
  );
