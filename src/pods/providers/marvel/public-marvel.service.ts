import { Options } from "redaxios";

import { CharactersResult, MarvelPagination, MarvelResponse } from "./interfaces";
import publicMarvelInstanceService from "./public-instance.service";

export const getCharacters = async (options?: Options) => publicMarvelInstanceService.get<MarvelResponse<MarvelPagination<CharactersResult>>>('/characters', options)
