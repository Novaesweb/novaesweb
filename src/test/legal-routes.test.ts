import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";

describe("Public legal pages", () => {
  for (const path of ["/privacidade", "/termos", "/reembolso"]) {
    it(`has its own accessible route for ${path}`, () => {
      const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
      expect(router.matchRoutes(path).at(-1)?.routeId).toBe(path);
    });
  }
});