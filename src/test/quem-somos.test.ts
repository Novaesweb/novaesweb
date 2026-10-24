import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";

describe("Quem Somos page", () => {
  it("has its own accessible route for /quem-somos", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes("/quem-somos").at(-1)?.routeId).toBe("/quem-somos");
  });
});
