"use client";

import Image from "next/image";
import { useIsClient } from "usehooks-ts";

import ButtonBase from "@/components/button-base";
import Flex from "@/components/flex";
import Heart from "@/components/heart";
import Spinner from "@/components/spinner";
import Typography from "@/components/typography";
import useFavs from "@/pods/favs/hooks/use-favs";
import useFetchMarvelHero from "@/pods/hero/hooks/use-fetch-marvel-hero";

import useHeroId from "../hooks/use-hero-id";

import styles from "./hero-header-section.module.scss";

const HeroHeaderSection = () => {
  const id = useHeroId();
  const { hero, isLoading } = useFetchMarvelHero(id);
  const isClient = useIsClient();
  const {
    favs,
    handlers: { toggle },
  } = useFavs();

  const heroImage = `${hero.data?.thumbnail.path}.${hero.data?.thumbnail.extension}`;

  return (
    <Flex as="section" className={styles["hero-header-section"]}>
      <div className={styles["hero-header-section-content"]}>
        {isLoading && (
          <Flex>
            <Spinner />
          </Flex>
        )}
        {!isLoading && hero && (
          <>
            <div className={styles["hero-header-section-image-container"]}>
              <Image
                layout="fill"
                objectFit="cover"
                src={heroImage}
                alt="hero image"
              />
            </div>
            <Flex
              direction="column"
              justify="center"
              gap={7}
              className={styles["hero-header-section-info"]}
            >
              <Flex gap={4} justify="between" align="center">
                <Typography variant="h1">{hero?.data?.name}</Typography>
                <ButtonBase
                  onClick={() =>
                    toggle({
                      id: Number(id),
                      image: heroImage,
                      name: hero.data?.name,
                    })
                  }
                >
                  {isClient ? (
                    <Heart
                      variant={
                        favs.items.find((x) => x.id.toString() === id)
                          ? "full-black"
                          : "empty"
                      }
                    />
                  ) : (
                    <Spinner />
                  )}
                </ButtonBase>
              </Flex>
              {hero.data?.description && (
                <Typography>{hero.data.description}</Typography>
              )}
            </Flex>
          </>
        )}
      </div>
    </Flex>
  );
};

export default HeroHeaderSection;
