"use client";

import { ReactNode, useState } from "react";

import favsContext from "./favs-context";
import { FavsState } from "./interfaces";
import favsStorage from "./storage";

interface FavsProviderProps {
  children: ReactNode;
}

const FavsProvider = ({ children }: FavsProviderProps) => {
  const [favs, setFavs] = useState<FavsState>(favsStorage.get);

  return (
    <favsContext.Provider value={{ favs, setFavs }}>
      {children}
    </favsContext.Provider>
  );
};

export default FavsProvider;
