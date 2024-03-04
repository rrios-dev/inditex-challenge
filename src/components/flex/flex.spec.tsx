import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Flex, { FlexProps } from ".";

const items = Array.from({ length: 10 }).map((_, index) => (
  <Flex key={index}>{index}</Flex>
));

describe("Flex component", () => {
  describe("Direction", () => {
    it.each(["row", "column"] as const)("%s", (direction) => {
      const { asFragment } = render(<Flex direction={direction}>{items}</Flex>);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("Justify content", () => {
    it.each(["start", "center", "end", "between", "around"] as const)(
      "%s",
      (justify) => {
        const { asFragment } = render(<Flex justify={justify}>{items}</Flex>);
        expect(asFragment()).toMatchSnapshot();
      }
    );
  });

  describe("Align Items", () => {
    it.each(["start", "center", "end", "stretch"] as const)("%s", (align) => {
      const { asFragment } = render(<Flex align={align}>{items}</Flex>);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("Wrap", () => {
    it.each(["wrap", "nowrap"] as const)("%s", (wrap) => {
      const { asFragment } = render(<Flex wrap={wrap}>{items}</Flex>);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("Gap", () => {
    Array.from({ length: 12 }).forEach((_, index) => {
      it((index + 1).toString(), () => {
        const { asFragment } = render(
          <Flex gap={(index + 1) as FlexProps<any>["gap"]}>{items}</Flex>
        );
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
