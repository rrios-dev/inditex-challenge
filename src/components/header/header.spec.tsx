import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import FavsProvider from "@/pods/favs/favs-provider";

import Header from "./header";

vi.mock("next/navigation", async (importOriginal) => ({
  ...((await importOriginal()) as any),
  useRouter: () => {},
}));

describe("Header", () => {
  it.each(["row", "column"] as const)("%s", (direction) => {
    const { asFragment } = render(
      <FavsProvider>
        <Header />
      </FavsProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
