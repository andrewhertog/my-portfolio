"use client";
import CookieConsent from "react-cookie-consent";

export function Consent() {
    return (
        <CookieConsent
            enableDeclineButton
            onDecline={() => {
                window.dispatchEvent(new Event("cookie-consent-denied"));
            }}
        >
        This website uses cookies for analytics.
        </CookieConsent>
    );
}
