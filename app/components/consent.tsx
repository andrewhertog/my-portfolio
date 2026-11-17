"use client";
import CookieConsent from "react-cookie-consent";

export const CONSENT_ACCEPTED_EVENT = "cookie-consent-accepted";
export const CONSENT_DENIED_EVENT = "cookie-consent-denied";

const button =
	"inline-flex items-center justify-center min-h-11 px-4 rounded-lg text-sm font-medium transition-colors";

export function Consent() {
	return (
		<CookieConsent
			disableStyles
			enableDeclineButton
			flipButtons
			location="none"
			ariaAcceptLabel="Accept analytics cookies"
			ariaDeclineLabel="Decline analytics cookies"
			buttonText="Accept"
			declineButtonText="Decline"
			containerClasses="fixed z-50 bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm flex flex-col gap-4 p-5 rounded-xl border border-zinc-800 bg-zinc-950/95 backdrop-blur shadow-2xl shadow-black/50"
			contentClasses="text-sm leading-relaxed text-zinc-400"
			buttonWrapperClasses="flex gap-2 justify-end"
			buttonClasses={`${button} bg-zinc-100 text-zinc-950 hover:bg-white`}
			declineButtonClasses={`${button} border border-zinc-700 text-zinc-200 hover:border-zinc-400 hover:text-white`}
			onAccept={() => {
				window.dispatchEvent(new Event(CONSENT_ACCEPTED_EVENT));
			}}
			onDecline={() => {
				window.dispatchEvent(new Event(CONSENT_DENIED_EVENT));
			}}
		>
			<span className="block mb-1 font-medium text-zinc-100">Analytics cookies</span>
			I use Google Analytics to see which pages get read. It only runs if you
			accept.
		</CookieConsent>
	);
}
