import { useMemo } from "react";

import ComicCard, { ComicCardProps } from "@/components/comic-card";
import useFetchMarvelComic from "@/pods/comics/hooks/use-fetch-marvel-comic";

interface HeroComicContainerProps {
  id?: string;
}
const HeroComicContainer = ({ id }: HeroComicContainerProps) => {
  const { comic, error, isLoading } = useFetchMarvelComic(id);

  const hasData = Boolean(comic.data);
  const releaseDate = comic.data?.dates.find(
    (x) => x.type === "onsaleDate"
  )?.date;

  const status: ComicCardProps | null = useMemo(() => {
    if (!id) return { status: "loading" };

    if (error) return { status: "error" };

    if (isLoading) return { status: "loading" };

    if (hasData)
      return {
        status: "success",
        imageSrc: `${comic.data!.thumbnail.path}.${
          comic.data!.thumbnail.extension
        }`,
        imageAlt: comic.data!.title,
        ...(releaseDate && {
          releaseDate: new Date(releaseDate).getFullYear().toString(),
        }),
        title: comic.data!.title,
      };

    return null;
  }, [error, isLoading, hasData, comic.data, releaseDate, id]);

  return status ? <ComicCard {...status} /> : null;
};

export default HeroComicContainer;
