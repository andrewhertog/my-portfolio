"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { getCookieConsentValue } from "react-cookie-consent";
import { GA_TRACKING_ID, pageview } from "../lib/gtag";

function AnalyticsInner() {
	const [hasConsent, setHasConsent] = useState(false);
	const pathname = usePathname();
	const searchParams = useSearchParams();

	// Check consent on mount (returning visitors) and listen for new consent
	useEffect(() => {
		if (getCookieConsentValue() === "true") {
			setHasConsent(true);
		}

		const onConsent = () => setHasConsent(true);
		window.addEventListener("cookie-consent-accepted", onConsent);
		return () =>
			window.removeEventListener("cookie-consent-accepted", onConsent);
	}, []);

	// Track client-side navigations
	useEffect(() => {
		if (!hasConsent) return;
		const url =
			pathname + (searchParams?.toString() ? `?${searchParams}` : "");
		pageview(url);
	}, [hasConsent, pathname, searchParams]);

	if (!GA_TRACKING_ID || !hasConsent) return null;

	return (
		<>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${GA_TRACKING_ID}');
				`}
			</Script>
		</>
	);
}

export function Analytics() {
	return (
		<Suspense fallback={null}>
			<AnalyticsInner />
		</Suspense>
	);
}
