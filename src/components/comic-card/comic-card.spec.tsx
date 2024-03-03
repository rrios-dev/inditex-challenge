import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ComicCard, { ComicCardProps } from ".";

describe("ComicCard component", () => {
  it("renders loading skeleton when status is loading", () => {
    const { asFragment } = render(<ComicCard status="loading" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders error message when status is error", () => {
    const { asFragment } = render(<ComicCard status="error" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders comic card with correct props when status is success", () => {
    const mockProps: ComicCardProps = {
      status: "success",
      releaseDate: "2022-01-01",
      imageSrc: "path/to/image.jpg",
      imageAlt: "Alt text",
      title: "Comic Title",
    };
    const { asFragment } = render(<ComicCard {...mockProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
