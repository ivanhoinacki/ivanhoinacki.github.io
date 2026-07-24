export function trackPageView(pagePath: string) {
  window.gtag?.("event", "page_view", {
    page_title: document.title,
    page_location: window.location.href,
    page_path: pagePath,
  });
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
