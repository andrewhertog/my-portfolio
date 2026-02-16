"use client";
import CookieConsent from "react-cookie-consent";

export function Consent() {
    return (
        <CookieConsent
            buttonText="Accept"
            style={{
                background: "rgba(0, 0, 0, 0.85)",
                backdropFilter: "blur(8px)",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "12px 24px",
                alignItems: "center",
            }}
            contentStyle={{
                fontSize: "14px",
                color: "#d4d4d8",
                margin: 0,
                flex: "1 0 auto",
            }}
            buttonStyle={{
                background: "#3f3f46",
                color: "#ffffff",
                fontSize: "13px",
                padding: "6px 16px",
                borderRadius: "6px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                fontWeight: 500,
                margin: 0,
            }}
        >
            This website uses cookies for analytics.
        </CookieConsent>
    );
}