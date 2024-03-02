interface ComicCardErrorProps {
  status: "error";
}

interface ComicCardSuccessProps {
  status: "success";
  releaseDate?: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
}

interface ComicCardLoadingProps {
  status: "loading";
}

export type ComicCardProps =
  | ComicCardErrorProps
  | ComicCardSuccessProps
  | ComicCardLoadingProps;
