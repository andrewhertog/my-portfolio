"use client";
import Script from "next/script";
// export function Analytics() {
// 	const token = process.env.NEXT_PUBLIC_BEAM_TOKEN;
// 	if (!token) {
// 		return null;
// 	}
// 	return (
// 		<script
// 			src="https://beamanalytics.b-cdn.net/beam.min.js"
// 			data-token={token}
// 			async
// 		/>
// 	);
// }

export function Analytics() {
	const token = process.env.NEXT_PUBLIC_GA4_TRACKING_ID;
	const src = `${token}`
	if (!token) {
		return null;
	}
	return (
		<div className="gaContainer" suppressHydrationWarning>
		  <Script src={`https://www.googletagmanager.com/gtag/js?id=${src}`} />
		  <Script id="google-analytics">
			{`
			  window.dataLayer = window.dataLayer || [];
			  function gtag(){dataLayer.push(arguments);}
			  gtag('js', new Date());
	 
			  gtag('config', '${token}');
			`}
		  </Script>
		</div>
	  )
}