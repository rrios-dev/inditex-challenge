import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import FavsProvider from "@/pods/favs/favs-provider";
import * as service from "@/pods/providers/marvel/marvel.service";

import { emptyHeroListMock, heroListMock } from "./__mocks__/get-hero-list";
import HeroFinder from "./hero-finder.scene";

vi.mock("next/navigation", async (importOriginal) => ({
  ...((await importOriginal()) as any),
  useSearchParams: () => ({ get: () => "" }),
  useRouter: () => ({ push: () => {} }),
}));

describe("Hero finder scene", () => {
  it("Mount Scene with data", async () => {
    vi.spyOn(service, "getHeroList").mockReturnValue(
      Promise.resolve({
        data: heroListMock,
      } as unknown as ReturnType<typeof service.getHeroList>)
    );

    const { asFragment } = render(
      <FavsProvider>{await HeroFinder({ searchParams: {} })}</FavsProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Mount scene with empty list", async () => {
    vi.spyOn(service, "getHeroList").mockReturnValue(
      Promise.resolve({
        data: emptyHeroListMock,
      } as unknown as ReturnType<typeof service.getHeroList>)
    );

    const { asFragment } = render(
      <FavsProvider>{await HeroFinder({ searchParams: {} })}</FavsProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
