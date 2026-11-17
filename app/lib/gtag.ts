export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA4_TRACKING_ID ?? "";

// gtag only exists once the visitor has accepted and the script has loaded.
function ready() {
	return Boolean(GA_TRACKING_ID) && typeof window.gtag === "function";
}

export function pageview(url: string) {
	if (!ready()) return;
	window.gtag("config", GA_TRACKING_ID, { page_path: url });
}

export function trackContactClick(label: string, href: string) {
	if (!ready()) return;
	window.gtag("event", "contact_click", {
		event_category: "engagement",
		event_label: label,
		link_url: href,
	});
}
