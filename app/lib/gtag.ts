export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA4_TRACKING_ID ?? "";

export function pageview(url: string) {
	if (!GA_TRACKING_ID) return;
	window.gtag("config", GA_TRACKING_ID, { page_path: url });
}

export function trackContactClick(label: string, href: string) {
	if (!GA_TRACKING_ID) return;
	window.gtag("event", "contact_click", {
		event_category: "engagement",
		event_label: label,
		link_url: href,
	});
}
