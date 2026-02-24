import "../global.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { Consent } from "./components/consent";

export const metadata: Metadata = {
	metadataBase: new URL("https://denhertog.ca"),
	title: {
		default: "denhertog.ca",
		template: "%s | denhertog.ca",
	},
	description:
		"Staff Site Reliability Engineer at Prodigy Education and Scalepoynt",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "denhertog.ca",
		description:
			"Staff Site Reliability Engineer at Prodigy Education and Scalepoynt",
		url: "https://denhertog.ca",
		siteName: "denhertog.ca",
		images: [
			{
				url: "https://denhertog.ca/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "adh88ca",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = localFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							name: "Andrew den Hertog",
							url: "https://denhertog.ca",
							jobTitle: "Staff Site Reliability Engineer",
							sameAs: ["https://twitter.com/adh88ca"],
						}),
					}}
				/>
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				<Analytics />
				<Consent />
				{children}
			</body>
		</html>
	);
}
