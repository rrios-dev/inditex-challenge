import { HeartProps } from "../heart";

interface HeroCardErrorProps {
  status: "error";
}

interface HeroCardSuccessProps {
  status: "success";
  id: number;
  name: string;
  imageSrc: string;
  onFav: (id: number) => void;
  favVariant?: HeartProps["variant"];
}

interface HeroCardLoadingProps {
  status: "loading";
}

export type HeroCardProps =
  | HeroCardErrorProps
  | HeroCardSuccessProps
  | HeroCardLoadingProps;
