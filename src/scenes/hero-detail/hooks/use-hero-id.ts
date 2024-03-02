import { useParams } from "next/navigation";

import parseHeroId from "../utils/parse-hero-id";

const useHeroId = () => {
  const { id } = useParams<{ id: string }>();

  const parsedId = parseHeroId(id);

  if (!parsedId) throw new Error("Invalid hero id");

  return parsedId;
};

export default useHeroId;
