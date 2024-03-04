"use client";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

const useAnimatedRouter = () => {
  const router = useRouter();
  const viewTransitionsStatus = () => {
    let status = "Opss, Your browser doesn't support View Transitions API";
    if (document?.startViewTransition) {
      status = "Yess, Your browser support View Transitions API";
    }
    return status;
  };

  const push = (url: string, options?: NavigateOptions) => {
    if (!document.startViewTransition)
      return router.push(url, { scroll: true, ...options });

    document.startViewTransition(() => {
      router.push(url);
    });
  };
  return { push, viewTransitionsStatus };
};

export default useAnimatedRouter;
