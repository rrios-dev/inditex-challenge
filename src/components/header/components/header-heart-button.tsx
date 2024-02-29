"use client";
import AnimatedLink from "@/components/animated-link";
import Heart from "@/components/heart";
import useFavs from "@/pods/favs/hooks/use-favs";

import styles from "./header-heart.button.module.scss";

const HeaderHeartButton = () => {
  const {
    favs: { ids },
  } = useFavs();
  return (
    <AnimatedLink className={styles["header-heart-link"]} href="/favs">
      <Heart status={ids.length > 0 ? "full-black" : "empty"} />
      {ids.length}
    </AnimatedLink>
  );
};

export default HeaderHeartButton;
