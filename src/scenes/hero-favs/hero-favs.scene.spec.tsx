import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { FAVS_STORAGE_KEY } from "@/pods/favs/constants";
import FavsProvider from "@/pods/favs/favs-provider";

import HeroFinder from "./hero-favs.scene";

vi.mock("next/navigation", async (importOriginal) => ({
  ...((await importOriginal()) as any),
  useSearchParams: () => ({ get: () => "" }),
  useRouter: () => ({ push: () => {} }),
}));

describe("Hero Favs Scene", () => {
  it("Mount Scene with two favs", () => {
    localStorage.setItem(
      FAVS_STORAGE_KEY,
      JSON.stringify({
        items: [
          {
            id: 1009144,
            image:
              "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec.jpg",
            name: "A.I.M.",
          },
          {
            id: 1011164,
            image:
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
            name: "Alvin Maker",
          },
        ],
      })
    );

    const { asFragment } = render(
      <FavsProvider>
        <HeroFinder />
      </FavsProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Mount Scene without result", () => {
    localStorage.setItem(
      FAVS_STORAGE_KEY,
      JSON.stringify({
        items: [],
      })
    );

    const { asFragment } = render(
      <FavsProvider>
        <HeroFinder />
      </FavsProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
