"use client";
import Script from "next/script";

export function Analytics() {
	const token = process.env.NEXT_PUBLIC_GA4_TRACKING_ID;
	if (!token) {
		return null;
	}
	return (
		<>
			<Script src={`https://www.googletagmanager.com/gtag/js?id=${token}`} />
			<Script id="google-analytics">
				{`
			  window.dataLayer = window.dataLayer || [];
			  function gtag(){dataLayer.push(arguments);}

			  gtag('consent', 'default', {
			    analytics_storage: 'denied',
			    ad_storage: 'denied',
			  });

			  gtag('js', new Date());
			  gtag('config', '${token}');
			`}
			</Script>
		</>
	);
}
