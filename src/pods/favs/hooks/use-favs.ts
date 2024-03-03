"use client";
import { useCallback, useContext } from "react";

import favsContext from "../favs-context";

const useFavs = () => {
  const ctx = useContext(favsContext);

  if (!ctx) {
    throw new Error("useFavs must be used within a FavsProvider");
  }

  const { favs, setFavs } = ctx;

  const add = useCallback(
    (id: number) =>
      setFavs((prev) => ({
        ids: [...prev.ids, id],
      })),
    [setFavs]
  );

  const toggle = useCallback(
    (id: number) =>
      setFavs((prev) => ({
        ids: prev.ids.includes(id)
          ? prev.ids.filter((favId) => favId !== id)
          : [...prev.ids, id],
      })),
    [setFavs]
  );

  const remove = useCallback(
    (id: number) =>
      setFavs((prev) => ({
        ids: prev.ids.filter((favId) => favId !== id),
      })),
    [setFavs]
  );

  const clear = useCallback(() => setFavs({ ids: [] }), [setFavs]);

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
