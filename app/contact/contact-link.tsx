"use client";

import Link from "next/link";
import { trackContactClick } from "../lib/gtag";
import type { ReactNode } from "react";

export function ContactLink({
	href,
	label,
	className,
	children,
}: {
	href: string;
	label: string;
	className?: string;
	children: ReactNode;
}) {
	return (
		<Link
			href={href}
			target="_blank"
			className={className}
			onClick={() => trackContactClick(label, href)}
		>
			{children}
		</Link>
	);
}
