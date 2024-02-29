import Typography from "@/components/typography";
import Image from "next/image";

import AnimatedLink from "../animated-link/animated-link";
import ButtonBase from "../button-base";
import Heart from "../heart";
import styles from "./hero-card.module.scss";
import { HeroCardProps } from "./interfaces";

const HeroCard = ({ id, imageSrc, name, onFav, favStatus }: HeroCardProps) => (
  <AnimatedLink
    className={styles["hero-card"]}
    href={`/hero/${id}-${name.replace(/(\s|\/|\\|\?)/g, "-").toLowerCase()}`}
  >
    <div className={styles["image-container"]}>
      <Image
        className="hero-image"
        priority
        layout="fill"
        objectFit="cover"
        src={imageSrc}
        objectPosition="center"
        alt={`hero image of ${name}`}
      />
    </div>
    <hr />
    <div className={styles["bar"]}>
      <Typography className={styles.name}>{name}</Typography>
      <ButtonBase
        className={styles["fav-button"]}
        onClick={(e) => {
          onFav(id);
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <Heart width={12} height={10} status={favStatus} />
      </ButtonBase>
    </div>
  </AnimatedLink>
);

export default HeroCard;
