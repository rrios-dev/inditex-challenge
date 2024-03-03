import { useEffect, useRef, useState } from "react";
import { useIsClient } from "usehooks-ts";

import Typography from "@/components/typography";

import AnimatedLink from "../animated-link/animated-link";
import ButtonBase from "../button-base";
import Heart from "../heart";
import Spinner from "../spinner";

import styles from "./hero-card.module.scss";
import { HeroCardProps } from "./interfaces";

const HeroCard = (props: HeroCardProps) => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);
  const isClient = useIsClient();

  useEffect(() => {
    const onActive = () => {
      setActive(true);
    };
    const onInactive = () => {
      setActive(false);
    };
    ref.current?.addEventListener("focus", onActive);
    ref.current?.addEventListener("blur", onInactive);
    ref.current?.addEventListener("mouseenter", onActive);
    ref.current?.addEventListener("mouseleave", onInactive);

    return () => {
      ref.current?.removeEventListener("mouseenter", onActive);
      ref.current?.removeEventListener("mouseleave", onInactive);
      ref.current?.removeEventListener("focus", onActive);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ref.current?.removeEventListener("blur", onInactive);
    };
  }, []);

  if (props.status === "loading") return <Spinner />;

  if (props.status === "error")
    return <Typography variant="body1">Error loading hero</Typography>;

  const { id, imageSrc, name, onFav, favVariant: favStatus } = props;
  return (
    <AnimatedLink
      ref={ref}
      className={styles["hero-card"]}
      href={`/hero/${id}-${name.replace(/(\s|\/|\\|\?)/g, "-").toLowerCase()}`}
    >
      <img
        className={styles["hero-card-image"]}
        src={imageSrc.replace("http", "https")}
        alt={`Thumbnail image of the hero ${name}`}
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
            <Heart
              width={12}
              height={10}
              variant={
                favStatus === "full-black" && active ? "full-white" : favStatus
              }
            />
          </ButtonBase>
        )}
      </div>
    </AnimatedLink>
  );
};

export default HeroCard;
