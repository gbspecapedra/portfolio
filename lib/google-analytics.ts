declare global {
  interface Window {
    dataLayer?: IArguments[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

let tagRequested = false;
let tagLoaded = false;
let tagConfigured = false;

function removeAnalyticsCookies() {
  const domains = window.location.hostname.split(".");

  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=", 1)[0].trim();
    if (!/^_ga(?:_[A-Z0-9]+)?$/i.test(name)) continue;

    const expired = `${name}=; Max-Age=0; Path=/`;
    document.cookie = expired;

    // GA can use the current host or a parent domain, such as the apex for www.
    for (let index = 0; index < domains.length - 1; index++) {
      document.cookie = `${expired}; Domain=${domains.slice(index).join(".")}`;
    }
  }
}

export function applyAnalyticsConsent(measurementId: string | undefined, allowed: boolean) {
  const browser = window;
  const disableKey = measurementId ? (`ga-disable-${measurementId}` as const) : undefined;
  const wasAllowed = disableKey !== undefined && browser[disableKey] === false;

  if (disableKey) {
    // Set the opt-out before queuing a consent update or removing cookies.
    browser[disableKey] = !allowed;
  }

  if (!allowed) {
    if (wasAllowed && tagConfigured) {
      browser.gtag?.("consent", "update", { analytics_storage: "denied" });
    }
    removeAnalyticsCookies();
    return;
  }

  if (!disableKey) return;

  function enableTracking() {
    if (!disableKey || browser[disableKey]) return;

    browser.gtag?.("consent", "update", { analytics_storage: "granted" });
    if (tagConfigured) return;

    // Keep GA's automatic load and history page views as the sole source of page views.
    browser.gtag?.("config", measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
    tagConfigured = true;
  }

  if (tagLoaded) {
    if (!wasAllowed || !tagConfigured) enableTracking();
    return;
  }
  if (tagRequested) return;

  const dataLayer = (browser.dataLayer ??= []);
  browser.gtag = function gtag() {
    // Google tag's command queue expects the native arguments object.
    // eslint-disable-next-line prefer-rest-params
    dataLayer.push(arguments);
  };
  browser.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  browser.gtag("js", new Date());

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.addEventListener("load", () => {
    tagLoaded = true;
    enableTracking();
  }, { once: true });
  script.addEventListener("error", () => {
    tagRequested = false;
    script.remove();
  }, { once: true });

  tagRequested = true;
  document.head.append(script);
}
