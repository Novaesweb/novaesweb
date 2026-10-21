import { afterEach, describe, expect, it } from "vitest";
import { analyticsConfiguration, canLoadAnalytics, parsePreferences, startApprovedAnalytics } from "@/lib/privacy";

const accepted = { version: 1 as const, analytics: true, savedAt: "2026-10-21T10:29:00Z" };
const approved = { approved: true, measurementId: "G-TEST123" };
afterEach(() => document.querySelectorAll("script[data-novaes-analytics]").forEach((script) => script.remove()));
describe("Optional tracking consent", () => {
  it("never starts a tracker before a choice", () => {
    startApprovedAnalytics(null, approved);
    expect(document.querySelector("script[data-novaes-analytics]")).toBeNull();
  });
  it("never starts a tracker after refusal", () => {
    startApprovedAnalytics({ ...accepted, analytics: false }, approved);
    expect(document.querySelector("script[data-novaes-analytics]")).toBeNull();
  });
  it("requires owner approval even after visitor acceptance", () => {
    expect(canLoadAnalytics(accepted, { ...approved, approved: false })).toBe(false);
  });
  it("keeps actual Analytics configuration disabled", () => {
    expect(analyticsConfiguration).toBeNull();
    expect(canLoadAnalytics(accepted, analyticsConfiguration)).toBe(false);
  });
  it("allows approved optional analytics only after acceptance", () => {
    expect(canLoadAnalytics(accepted, approved)).toBe(true);
  });
  it("rejects malformed or outdated preferences instead of granting consent", () => {
    expect(parsePreferences('{"version":1,"analytics":"true"}')).toBeNull();
    expect(parsePreferences(JSON.stringify({ ...accepted, version: 0 }))).toBeNull();
    expect(parsePreferences("invalid")).toBeNull();
  });
  it("preserves saved refusal", () => {
    expect(parsePreferences(JSON.stringify({ ...accepted, analytics: false }))?.analytics).toBe(false);
  });
});