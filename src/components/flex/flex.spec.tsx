import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Flex, { FlexProps } from ".";

const items = Array.from({ length: 10 }).map((_, index) => (
  <Flex key={index}>{index}</Flex>
));

describe("Flex component", () => {
  describe("Direction", () => {
    it("row", () => {
      const { asFragment } = render(<Flex>{items}</Flex>);
      expect(asFragment()).toMatchSnapshot();
    });
    it("column", () => {
      const { asFragment } = render(<Flex direction="column">{items}</Flex>);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("Justify content", () => {
    it("flex-start", () => {
      const { asFragment } = render(<Flex justify="start">{items}</Flex>);
      expect(asFragment()).toMatchSnapshot();
    });
    it("center", () => {
      const { asFragment } = render(<Flex justify="center">{items}</Flex>);
      expect(asFragment()).toMatchSnapshot();
    });
    it("flex-end", () => {
      const { asFragment } = render(<Flex justify="end">{items}</Flex>);
      expect(asFragment()).toMatchSnapshot();
    });
    it("space-between", () => {
      const { asFragment } = render(<Flex justify="between">{items}</Flex>);
      expect(asFragment()).toMatchSnapshot();
    });
    it("space-around", () => {
      const { asFragment } = render(<Flex justify="around">{items}</Flex>);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("Align items", () => {
    it("flex-start", () => {
      const { asFragment } = render(<Flex align="start">{items}</Flex>);
      expect(asFragment()).toMatchSnapshot();
    });
    it("center", () => {
      const { asFragment } = render(<Flex align="center">{items}</Flex>);
      expect(asFragment()).toMatchSnapshot();
    });
    it("flex-end", () => {
      const { asFragment } = render(<Flex align="end">{items}</Flex>);
      expect(asFragment()).toMatchSnapshot();
    });

    it("stretch", () => {
      const { asFragment } = render(<Flex align="stretch">{items}</Flex>);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("Wrap", () => {
    it("wrap", () => {
      const { asFragment } = render(<Flex wrap="wrap">{items}</Flex>);
      expect(asFragment()).toMatchSnapshot();
    });
    it("no-wrap", () => {
      const { asFragment } = render(<Flex wrap="nowrap">{items}</Flex>);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("Gap", () => {
    Array.from({ length: 12 }).forEach((_, index) => {
      it(`gap-${index + 1}`, () => {
        const { asFragment } = render(
          <Flex gap={(index + 1) as FlexProps<any>["gap"]}>{items}</Flex>
        );
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
