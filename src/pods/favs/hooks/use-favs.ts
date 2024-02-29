'use client';
import { useContext } from "react";

import favsContext from "../favs-context";

const useFavs = () => {
    const ctx = useContext(favsContext);

    if (!ctx) {
        throw new Error('useFavs must be used within a FavsProvider');
    }

    const { favs, setFavs } = ctx;

    const add = (id: number) => setFavs((prev) => ({
        ids: [...prev.ids, id]
    }))

    const toggle = (id: number) => setFavs((prev) => ({
        ids: prev.ids.includes(id) ? prev.ids.filter((favId) => favId !== id) : [...prev.ids, id],
    }));

    const remove = (id: number) => setFavs((prev) => ({
        ids: prev.ids.filter((favId) => favId !== id)
    }))

    const clear = () => setFavs({ ids: [] });


    return {
        favs,
        handlers: {
            add,
            remove,
            toggle,
            clear,
        }
    }
};

export default useFavs;