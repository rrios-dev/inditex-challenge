'use client';

import { DEFAULT_FAVS_STATE, FAVS_STORAGE_KEY } from "./constants";
import { FavsState } from "./interfaces";

const storage = window.localStorage;

const favsStorage = {
    get: () => {
        const data = storage.getItem(FAVS_STORAGE_KEY)
        return data ? JSON.parse(data) as FavsState : DEFAULT_FAVS_STATE;
    },
    set: (favs: FavsState) => storage.setItem(FAVS_STORAGE_KEY, JSON.stringify(favs)),
    clear: () => storage.setItem(FAVS_STORAGE_KEY, JSON.stringify(DEFAULT_FAVS_STATE))
} as const;

export default favsStorage;