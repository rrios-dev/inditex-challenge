import { useState } from "react";
import { useIsClient } from "usehooks-ts";

import HeroCard from "@/components/hero-card/hero-card";
import HeroSelector from "@/components/hero-selector";
import SearchInput from "@/components/search-input";
import useFavs from "@/pods/favs/hooks/use-favs";

const HeroFavs = () => {
  const {
    favs,
    handlers: { toggle },
  } = useFavs();
  const isClient = useIsClient();
  const [search, setSearch] = useState("");

  const items = favs.items.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SearchInput
        onDelayedTyping={(search) => setSearch(search)}
        resultsCount={isClient ? items.length : null}
      />
      <HeroSelector>
        {items.map((item) => (
          <li key={item.id}>
            <HeroCard
              id={item.id}
              name={item.name as string}
              imageSrc={item.image as string}
              status="success"
              favVariant="full-black"
              onFav={() => toggle({ id: item.id })}
            />
          </li>
        ))}
      </HeroSelector>
    </>
  );
};

export default HeroFavs;
