"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { getCookieConsentValue } from "react-cookie-consent";
import { GA_TRACKING_ID, pageview } from "../lib/gtag";
import { CONSENT_ACCEPTED_EVENT, CONSENT_DENIED_EVENT } from "./consent";

function AnalyticsInner() {
	// Opt-in: analytics stays off until the visitor accepts.
	const [hasConsent, setHasConsent] = useState(false);
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		if (getCookieConsentValue() === "true") {
			setHasConsent(true);
		}

		const onAccept = () => setHasConsent(true);
		const onDeny = () => setHasConsent(false);
		window.addEventListener(CONSENT_ACCEPTED_EVENT, onAccept);
		window.addEventListener(CONSENT_DENIED_EVENT, onDeny);
		return () => {
			window.removeEventListener(CONSENT_ACCEPTED_EVENT, onAccept);
			window.removeEventListener(CONSENT_DENIED_EVENT, onDeny);
		};
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
