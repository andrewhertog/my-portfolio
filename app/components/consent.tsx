"use client";
import CookieConsent from "react-cookie-consent";

export function Consent() {
    return (
        <CookieConsent
            onAccept={() => {
                window.dispatchEvent(new Event("cookie-consent-accepted"));
            }}
        >
        This website uses cookies for analytics.
        </CookieConsent>
    );
}
