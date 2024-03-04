"use client";
import { useIsClient } from "usehooks-ts";

import AnimatedLink from "@/components/animated-link";
import Heart from "@/components/heart";
import Spinner from "@/components/spinner";
import useFavs from "@/pods/favs/hooks/use-favs";

import styles from "./header-heart.button.module.scss";

const HeaderHeartButton = () => {
  const {
    favs: { items },
  } = useFavs();
  const isMounted = useIsClient();
  return (
    <AnimatedLink
      aria-label="Go to favs hero list"
      className={styles["header-heart-link"]}
      href="/favs"
    >
      {isMounted ? (
        <>
          <Heart variant={items.length > 0 ? "full-black" : "empty"} />
          {items.length}
        </>
      ) : (
        <Spinner size="md" />
      )}
    </AnimatedLink>
  );
};

export default HeaderHeartButton;
