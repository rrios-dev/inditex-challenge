"use client";
import { useParams } from "next/navigation";

const HeroDetailScene = () => {
  const { id } = useParams();
  return <div>hero detail {id}</div>;
};

export default HeroDetailScene;
