"use client";
import ButtonBase from "@/components/button-base";
import Heart from "@/components/heart";
import useFavs from "@/pods/favs/hooks/use-favs";

import styles from "./header-heart.button.module.scss";

const HeaderHeartButton = () => {
  const {
    favs: { ids },
  } = useFavs();
  return (
    <ButtonBase
      className={styles["header-heart-button"]}
      onClick={() => console.log("funciona")}
    >
      <Heart />
      {ids.length}
    </ButtonBase>
  );
};

export default HeaderHeartButton;
