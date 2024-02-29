"use client";

import { ReactNode } from "react";
import { useLocalStorage } from "usehooks-ts";

import { DEFAULT_FAVS_STATE, FAVS_STORAGE_KEY } from "./constants";
import favsContext from "./favs-context";
import { FavsState } from "./interfaces";

interface FavsProviderProps {
  children: ReactNode;
}

const FavsProvider = ({ children }: FavsProviderProps) => {
  const [favs, setFavs] = useLocalStorage<FavsState>(
    FAVS_STORAGE_KEY,
    DEFAULT_FAVS_STATE
  );

  return (
    <favsContext.Provider value={{ favs, setFavs }}>
      {children}
    </favsContext.Provider>
  );
};

export default FavsProvider;
