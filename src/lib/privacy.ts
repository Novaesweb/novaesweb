export type PrivacyPreferences = { version: 1; analytics: boolean; savedAt: string };
export const PRIVACY_STORAGE_KEY = "novaesweb:privacy:v1";
export type AnalyticsConfiguration = { approved: boolean; measurementId: string };

// Remains unconfigured until the owner approves and connects Google Analytics.
export const analyticsConfiguration: AnalyticsConfiguration | null = null;

export function parsePreferences(value: string | null): PrivacyPreferences | null {
  if (!value) return null;
  try {
    const parsed: unknown = JSON.parse(value);
    if (typeof parsed !== "object" || parsed === null) return null;
    const data = parsed as Record<string, unknown>;
    if (data['version'] !== 1 || typeof data['analytics'] !== "boolean" || typeof data['savedAt'] !== "string" || Number.isNaN(Date.parse(data['savedAt']))) return null;
    return { version: 1, analytics: data['analytics'], savedAt: data['savedAt'] };
  } catch { return null; }
}

export function canLoadAnalytics(preferences: PrivacyPreferences | null, configuration: AnalyticsConfiguration | null): boolean {
  return preferences?.analytics === true && configuration?.approved === true && /^G-[A-Z0-9]+$/.test(configuration.measurementId);
}

export function startApprovedAnalytics(preferences: PrivacyPreferences | null, configuration: AnalyticsConfiguration | null): void {
  if (typeof window === "undefined" || !canLoadAnalytics(preferences, configuration) || !configuration) return;
  if (document.querySelector("script[data-novaes-analytics]")) return;
  const target = window as unknown as Record<string, unknown>;
  target[`ga-disable-${configuration.measurementId}`] = false;
  const queue = (target['dataLayer'] ??= []) as unknown[];
  function gtag(...args: unknown[]) { queue.push(args); }
  target['gtag'] = gtag;
  gtag("consent", "default", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
  gtag("set", "developer_id.dZjgwMW", true);
  gtag("js", new Date());
  // Explicit page views omit form values, URL queries and fragments.
  gtag("config", configuration.measurementId, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false });
  const script = document.createElement("script");
  script.async = true;
  script.dataset['novaesAnalytics'] = "true";
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(configuration.measurementId)}`;
  document.head.appendChild(script);
}

export function trackApprovedPage(pathname: string, preferences: PrivacyPreferences | null, configuration: AnalyticsConfiguration | null): void {
  if (typeof window === "undefined" || !canLoadAnalytics(preferences, configuration)) return;
  const target = window as unknown as Record<string, unknown>;
  if (typeof target['gtag'] === "function") target['gtag']("event", "page_view", { page_path: pathname, page_location: `${window.location.origin}${pathname}` });
}