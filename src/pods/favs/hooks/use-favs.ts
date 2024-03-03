"use client";
import { useCallback, useContext } from "react";

import favsContext from "../favs-context";
import { FavHeroItem } from "../interfaces";

const useFavs = () => {
  const ctx = useContext(favsContext);

  if (!ctx) {
    throw new Error("useFavs must be used within a FavsProvider");
  }

  const { favs, setFavs } = ctx;

  const add = useCallback(
    (item: FavHeroItem) =>
      setFavs((prev) => ({
        items: [...prev.items, item],
      })),
    [setFavs]
  );

  const toggle = useCallback(
    (item: FavHeroItem) =>
      setFavs((prev) => ({
        items: prev.items.some((fav) => fav.id === item.id)
          ? prev.items.filter((fav) => fav.id !== item.id)
          : [...prev.items, item],
      })),
    [setFavs]
  );

  const remove = useCallback(
    (item: FavHeroItem) =>
      setFavs((prev) => ({
        items: prev.items.filter((fav) => fav.id !== item.id),
      })),
    [setFavs]
  );

  const clear = useCallback(() => setFavs({ items: [] }), [setFavs]);

  return {
    favs,
    handlers: {
      add,
      remove,
      toggle,
      clear,
    },
  };
};

export default useFavs;
