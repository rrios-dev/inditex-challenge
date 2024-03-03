"use client";
import { useIsClient } from "usehooks-ts";

import AnimatedLink from "@/components/animated-link";
import Heart from "@/components/heart";
import Spinner from "@/components/spinner";
import useFavs from "@/pods/favs/hooks/use-favs";

import styles from "./header-heart.button.module.scss";

const HeaderHeartButton = () => {
  const {
    favs: { ids },
  } = useFavs();
  const isMounted = useIsClient();
  return (
    <AnimatedLink className={styles["header-heart-link"]} href="/favs">
      {isMounted ? (
        <>
          <Heart variant={ids.length > 0 ? "full-black" : "empty"} />
          {ids.length}
        </>
      ) : (
        <Spinner size="md" />
      )}
    </AnimatedLink>
  );
};

export default HeaderHeartButton;
