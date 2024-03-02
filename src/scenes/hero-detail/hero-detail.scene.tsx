import { Metadata } from "next";
import { cache } from "react";
import { unstable_serialize } from "swr";

import Flex from "@/components/flex";
import privateMarvelInstanceService from "@/pods/providers/marvel/private-instance.service";
import { getHeroDetail } from "@/pods/providers/marvel/public-marvel.service";
import makeAppTitle from "@/pods/seo/utils/make-app-title";
import SWRProvider from "@/pods/swr/swr-provider";

import HeroComicsSection from "./components/hero-comics-section";
import HeroHeaderSection from "./components/hero-header-section";
import parseHeroId from "./utils/parse-hero-id";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const getData = cache(async (id: string) => {
  const hero = await getHeroDetail(id, {
    params: {},
    instance: privateMarvelInstanceService,
  });

  return hero.data;
});

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const parsedId = parseHeroId(id);

  if (!parsedId) throw new Error("Invalid hero id");

  const { name } = (await getData(parsedId)).data.results[0];
  return {
    title: makeAppTitle(name),
    description: `Comics featuring ${name} from Marvel Comics.`,
  };
}

const HeroDetailScene = async ({ params: { id, ...rest }, ...props }: any) => {
  const parsedId = parseHeroId(id);

  if (!parsedId) throw new Error("Invalid hero id");

  const hero = await getData(parsedId);

  const key = unstable_serialize(["hero", parsedId]);

  return (
    <Flex as="main" direction="column" gap={12}>
      <SWRProvider fallback={{ [key]: hero }}>
        <HeroHeaderSection />
        <HeroComicsSection />
      </SWRProvider>
    </Flex>
  );
};

export default HeroDetailScene;
