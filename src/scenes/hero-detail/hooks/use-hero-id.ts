import { useParams } from "next/navigation";

const useHeroId = () => {
    const { id } = useParams<{ id: string }>();

    const parsedId = id.match(/^(\d+)-/)?.[1];

    if (!parsedId) throw new Error('Invalid hero id');

    return parsedId;
}

export default useHeroId;