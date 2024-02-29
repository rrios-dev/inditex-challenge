import { useContext } from "react";

import favsContext from "../favs-context";
import favsStorage from "../storage";

const useFavs = () => {
    const ctx = useContext(favsContext);

    if (!ctx) {
        throw new Error('useFavs must be used within a FavsProvider');
    }

    const { favs, setFavs } = ctx;


    const add = (id: string) => setFavs((prev) => {
        const newState = {
            ids: [...prev.ids, id]
        };

        favsStorage.set(newState);

        return newState;

    })

    const remove = (id: string) => setFavs((prev) => {
        const newState = {
            ids: prev.ids.filter((favId) => favId !== id)
        };

        favsStorage.set(newState);

        return newState;
    })

    const clear = () => {
        setFavs({ ids: [] });
        favsStorage.clear();
    };


    return {
        favs,
        handlers: {
            add,
            remove,
            clear,
        }
    }
};

export default useFavs;