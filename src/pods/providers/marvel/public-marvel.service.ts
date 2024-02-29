import { CharactersResult, MarvelPagination, MarvelResponse } from "./interfaces";
import publicMarvelInstanceService from "./public-instance.service";

export const getCharacters = async () => publicMarvelInstanceService.get<MarvelResponse<MarvelPagination<CharactersResult>>>('/characters')
