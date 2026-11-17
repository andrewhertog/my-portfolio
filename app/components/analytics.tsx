"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { getCookieConsentValue } from "react-cookie-consent";
import { GA_TRACKING_ID, pageview } from "../lib/gtag";

function AnalyticsInner() {
	const [hasConsent, setHasConsent] = useState(true);
	const pathname = usePathname();
	const searchParams = useSearchParams();

	// If the user has explicitly declined, disable analytics
	useEffect(() => {
		if (getCookieConsentValue() === "false") {
			setHasConsent(false);
		}

		const onDeny = () => setHasConsent(false);
		window.addEventListener("cookie-consent-denied", onDeny);
		return () =>
			window.removeEventListener("cookie-consent-denied", onDeny);
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
