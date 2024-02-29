import { HeartProps } from "../heart";

export interface HeroCardProps {
    id: number;
    name: string;
    imageSrc: string;
    onFav: (id: number) => void;
    favStatus?: HeartProps['status']
}
