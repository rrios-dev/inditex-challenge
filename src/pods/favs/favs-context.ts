import { Dispatch, SetStateAction, createContext } from "react";

import { FavsState } from "./interfaces";


export interface FavsContext {
    favs: FavsState;
    setFavs: Dispatch<SetStateAction<FavsState>>;
}

const favsContext = createContext<FavsContext | null>(null);

export default favsContext;