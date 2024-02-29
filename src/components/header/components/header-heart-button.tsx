"use client";
import ButtonBase from "@/components/button-base";
import Heart from "@/components/heart";

import styles from "./header-heart.button.module.scss";

const HeaderHeartButton = () => {
  return (
    <ButtonBase
      className={styles["header-heart-button"]}
      onClick={() => console.log("funciona")}
    >
      <Heart />3
    </ButtonBase>
  );
};

export default HeaderHeartButton;
