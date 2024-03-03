import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import FavsProvider from "@/pods/favs/favs-provider";
import * as service from "@/pods/providers/marvel/marvel.service";

// import { emptyHeroListMock, heroListMock } from "./__mocks__/get-hero-list";
import { heroDetailMock } from "./__mocks__/get-hero-detail";
import HeroDetail from "./hero-detail.scene";

vi.mock("react", async (importOriginal) => ({
  ...((await importOriginal()) as any),
  cache: () => () => ({}),
}));

vi.mock("next/navigation", async (importOriginal) => ({
  ...((await importOriginal()) as any),
  useParams: () => ({ id: "1234-" }),
}));

describe("Hero Detail Scene", () => {
  it.only("Mount Scene with data", async () => {
    vi.spyOn(service, "getHeroDetail").mockReturnValue(
      Promise.resolve({
        data: heroDetailMock,
      } as unknown as ReturnType<typeof service.getHeroDetail>)
    );

    const { asFragment } = render(
      <FavsProvider>
        {await HeroDetail({ params: { id: "1234-" } })}
      </FavsProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
