"use client";
import { useRouter } from "next/navigation";

import { ExtendedDocument } from "../interfaces";

const useAnimatedRouter = () => {
    const router = useRouter();
    const viewTransitionsStatus = () => {
        const extendedDocument = document as ExtendedDocument;
        let status = "Opss, Your browser doesn't support View Transitions API";
        if (extendedDocument?.startViewTransition) {
            status = "Yess, Your browser support View Transitions API";
        }
        return status;
    };

    const push = (url: string) => {
        const extendedDocument = document as ExtendedDocument;
        if (!extendedDocument.startViewTransition) {
            return router.push(url);
        } else {
            extendedDocument.startViewTransition(() => {
                router.push(url);
            });
        }
    };
    return { push, viewTransitionsStatus };
}

export default useAnimatedRouter;