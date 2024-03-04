import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import FavsProvider from "@/pods/favs/favs-provider";

import HeroFavsScene from "../hero-favs/hero-favs.scene";

describe("Not found scene", () => {
  it("Mount scene", () => {
    const { asFragment } = render(
      <FavsProvider>
        <HeroFavsScene />
      </FavsProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
