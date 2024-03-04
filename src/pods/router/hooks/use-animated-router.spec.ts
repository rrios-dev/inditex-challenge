import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import useAnimatedRouter from "./use-animated-router";

const pushFn = vi.fn();

vi.mock("next/navigation", async (importOriginal) => ({
  ...((await importOriginal()) as any),
  useRouter: () => ({
    push: pushFn,
  }),
}));

describe("use-animated-router", () => {
  describe("Push behavior", () => {
    it("With view transition", () => {
      const pathname = "/hero/1-iron";
      document.startViewTransition = vi.fn((fn) => fn());
      const { result } = renderHook(() => useAnimatedRouter());
      result.current.push(pathname);

      expect(document.startViewTransition).toHaveBeenCalledTimes(1);
      expect(pushFn).toHaveBeenCalledWith(pathname);
    });
    it("Without view transition", () => {
      const pathname = "/hero/1-iron";
      document.startViewTransition = null;
      const { result } = renderHook(() => useAnimatedRouter());
      result.current.push(pathname);

      expect(pushFn).toHaveBeenCalledWith(pathname);
    });
  });

  describe("View transtition status", () => {
    it("With view transition", () => {
      document.startViewTransition = vi.fn();
      const { result } = renderHook(() => useAnimatedRouter());
      const status = result.current.viewTransitionsStatus();

      expect(status).toBe("Yess, Your browser support View Transitions API");
    });
    it("Without view transition", () => {
      document.startViewTransition = null;
      const { result } = renderHook(() => useAnimatedRouter());
      const status = result.current.viewTransitionsStatus();

      expect(status).toBe(
        "Opss, Your browser doesn't support View Transitions API"
      );
    });
  });
});
