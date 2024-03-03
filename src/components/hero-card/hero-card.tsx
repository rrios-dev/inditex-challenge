import { useIsClient } from "usehooks-ts";

import Typography from "@/components/typography";

import AnimatedLink from "../animated-link/animated-link";
import ButtonBase from "../button-base";
import Heart from "../heart";
import Spinner from "../spinner";

import styles from "./hero-card.module.scss";
import { HeroCardProps } from "./interfaces";

const HeroCard = (props: HeroCardProps) => {
  const isClient = useIsClient();
  if (props.status === "loading") return <Spinner />;

  if (props.status === "error")
    return <Typography variant="body1">Error loading hero</Typography>;

  const { id, imageSrc, name, onFav, favVariant: favStatus } = props;
  return (
    <AnimatedLink
      className={styles["hero-card"]}
      href={`/hero/${id}-${name.replace(/(\s|\/|\\|\?)/g, "-").toLowerCase()}`}
    >
      <img
        className={styles["image"]}
        src={imageSrc}
        alt={`hero image of ${name}`}
        loading="lazy"
      />
      <hr />
      <div className={styles["bar"]}>
        <Typography variant="body2" className={styles.name}>
          {name}
        </Typography>
        {isClient && (
          <ButtonBase
            className={styles["fav-button"]}
            onClick={(e) => {
              onFav(id);
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            <Heart width={12} height={10} variant={favStatus} />
          </ButtonBase>
        )}
      </div>
    </AnimatedLink>
  );
};

export default HeroCard;
