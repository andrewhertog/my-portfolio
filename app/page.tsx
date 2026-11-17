import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { Metadata } from "next";
import { skillCategories } from "./skills/data";

export const metadata: Metadata = {
	alternates: { canonical: "/" },
	title: "Home",
};

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Skills", href: "/skills" },
	{ name: "Blog", href: "/blog" },
	{ name: "Contact", href: "/contact" },
];

const stats = [
	{ value: "2M", label: "requests per minute on a typical day" },
	{ value: "150k+", label: "simultaneous students at peak" },
	{ value: "60k", label: "simultaneous students on a regular day" },
	{ value: "1000s", label: "of pods on hundreds of nodes, across multiple clusters" },
];

const certifications = [
	"Solutions Architect – Professional",
	"DevOps Engineer – Professional",
];

const work = [
	{
		href: "/projects/prodigy",
		meta: "Staff SRE · since 2023",
		title: "Prodigy Education",
		points: [
			"Scoped Istio configuration and planned the move to Gateway API",
			"Leading the move off Jenkins and JFrog Artifactory",
			"Replaced Kubernetes External Secrets with External Secrets Operator",
		],
	},
	{
		href: "/projects/frontier-rnd",
		meta: "Developer tools · since 2024",
		title: "Frontier R&D",
		points: [
			"Built Web Codex, a Kubernetes platform that runs Codex Editor in the browser",
			"Maintain a white-labelled VS Code build with Windows code signing",
			"Wrote an extension sideloader built into the Codex binary",
		],
	},
	{
		href: "/projects/scalepoynt",
		meta: "Consulting · since 2023",
		title: "scalepoynt.io",
		points: [
			"An “AWS SWAT team” for startups and small businesses",
			"Build, manage and scale their cloud and DevOps",
			"Get them through enterprise security reviews",
		],
	},
];

const container = "max-w-[1200px] mx-auto px-6";
const sectionTitle = "font-display text-[32px] text-zinc-50";
const eyebrow = "text-sm font-medium uppercase tracking-[0.08em] text-zinc-400";
const card =
	"rounded-[14px] border border-zinc-800 transition-colors duration-300 hover:border-zinc-600 hover:bg-[#111113]";
const btnPrimary =
	"inline-flex items-center gap-2.5 min-h-12 px-[22px] rounded-[10px] bg-zinc-100 text-zinc-950 font-semibold text-[15px] transition-colors hover:bg-white";
const btnGhost =
	"inline-flex items-center gap-2.5 min-h-12 px-[22px] rounded-[10px] border border-zinc-700 text-zinc-200 font-medium text-[15px] transition-colors hover:border-zinc-400 hover:text-white";
const inlineLink =
	"text-zinc-100 underline underline-offset-4 decoration-zinc-600 hover:decoration-zinc-300";

function Hexagon() {
	return (
		<svg width="52" height="58" viewBox="0 0 52 58" aria-hidden="true" className="shrink-0">
			<path
				d="M26 2 L49 15 L49 43 L26 56 L3 43 L3 15 Z"
				fill="none"
				className="stroke-sky-300"
				strokeWidth="1.5"
			/>
			<text
				x="26"
				y="33"
				textAnchor="middle"
				fontSize="11"
				fontWeight="600"
				className="fill-zinc-100 font-sans"
			>
				PRO
			</text>
		</svg>
	);
}

export default function Home() {
	return (
		<div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
			<header className="border-b border-zinc-900">
				<div className={`${container} py-5 flex flex-wrap items-center justify-between gap-4`}>
					<Link href="/" className="font-display text-[22px] tracking-[0.01em] text-zinc-100">
						denHertog.ca
					</Link>
					<nav aria-label="Main">
						<ul className="flex flex-wrap gap-x-7 gap-y-1 text-[15px]">
							{navigation.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className="inline-block py-3 text-zinc-400 transition-colors hover:text-white"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</header>

			<main>
				{/* Hero */}
				<section className="relative overflow-hidden">
					<div
						aria-hidden="true"
						className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(60%_70%_at_70%_40%,#000_0%,transparent_75%)]"
					/>
					<div className={`${container} relative pt-28 pb-24 flex flex-col gap-7`}>
						<p className={`${eyebrow} flex items-center gap-2.5`}>
							<span aria-hidden="true" className="w-2 h-2 rounded-full bg-sky-300" />
							Staff Site Reliability Engineer
						</p>
						<h1 className="max-w-[900px] font-display text-[clamp(2.75rem,6vw,5.25rem)] leading-[1.02] tracking-[-0.01em] text-zinc-50">
							Infrastructure that holds up with 150,000 students playing at once.
						</h1>
						<p className="max-w-[640px] text-[19px] leading-relaxed text-zinc-400">
							I&apos;m Andrew den Hertog. I build and run the Kubernetes platform at{" "}
							<Link target="_blank" href="https://www.prodigygame.com" className={inlineLink}>
								Prodigy Education
							</Link>
							, and help startups get their AWS ready to grow through{" "}
							<Link target="_blank" href="https://www.scalepoynt.io" className={inlineLink}>
								scalepoynt.io
							</Link>
							.
						</p>
						<div className="flex flex-wrap gap-3 mt-2">
							<Link href="/projects" className={btnPrimary}>
								See my work
							</Link>
							<Link href="#contact" className={btnGhost}>
								Get in touch
							</Link>
						</div>
					</div>
				</section>

				{/* Scale numbers */}
				<section aria-labelledby="scale-h" className="border-y border-zinc-900 bg-[#0c0c0e]">
					<div className={`${container} py-14 flex flex-col gap-8`}>
						<h2 id="scale-h" className={eyebrow}>
							What I run day to day at Prodigy
						</h2>
						<dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
							{stats.map((s) => (
								<div key={s.value} className="flex flex-col-reverse gap-2">
									<dt className="text-[15px] leading-normal text-zinc-400">{s.label}</dt>
									<dd className="font-display text-[56px] leading-none text-zinc-50">{s.value}</dd>
								</div>
							))}
						</dl>
					</div>
				</section>

				{/* Certifications */}
				<section aria-labelledby="cert-h">
					<div className={`${container} pt-20 pb-8 flex flex-wrap items-start gap-8`}>
						<div className="flex-[1_1_280px] flex flex-col gap-3">
							<h2 id="cert-h" className={sectionTitle}>
								Certified on AWS
							</h2>
							<p className="text-base leading-relaxed text-zinc-400">
								Both professional-level AWS certifications.
							</p>
							<Link
								target="_blank"
								href="https://www.credly.com/users/andrew-den-hertog"
								className="inline-flex items-center gap-1.5 min-h-11 text-[15px] text-sky-300 hover:text-sky-200"
							>
								Verify on Credly <span aria-hidden="true">→</span>
							</Link>
						</div>
						<ul className="flex-[2_1_520px] flex flex-wrap gap-4">
							{certifications.map((name) => (
								<li key={name} className={`${card} flex-[1_1_250px] flex items-center gap-[18px] p-[22px]`}>
									<Hexagon />
									<div className="flex flex-col gap-1">
										<span className="text-[13px] text-zinc-400">AWS Certified</span>
										<span className="text-[17px] font-semibold leading-snug text-zinc-100">{name}</span>
									</div>
								</li>
							))}
						</ul>
					</div>
				</section>

				{/* Selected work */}
				<section aria-labelledby="work-h">
					<div className={`${container} py-16 flex flex-col gap-8`}>
						<div className="flex flex-wrap items-end justify-between gap-4">
							<h2 id="work-h" className={sectionTitle}>
								Selected work
							</h2>
							<Link
								href="/projects"
								className="inline-flex items-center gap-1.5 min-h-11 text-[15px] text-sky-300 hover:text-sky-200"
							>
								All projects <span aria-hidden="true">→</span>
							</Link>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
							{work.map((w) => (
								<Link key={w.href} href={w.href} className={`${card} flex flex-col gap-3.5 p-7`}>
									<span className="text-[13px] text-zinc-400">{w.meta}</span>
									<h3 className="font-display text-[26px] text-zinc-50">{w.title}</h3>
									<ul className="list-disc pl-[1.1rem] flex flex-col gap-2 text-[15px] leading-relaxed text-zinc-400">
										{w.points.map((p) => (
											<li key={p}>{p}</li>
										))}
									</ul>
								</Link>
							))}
						</div>
						<p className="text-[15px] leading-relaxed text-zinc-400">
							Also: open-source fixes to the S3 backend in{" "}
							<Link target="_blank" href="https://github.com/opentofu/opentofu/pull/670" className={inlineLink}>
								OpenTofu
							</Link>{" "}
							and{" "}
							<Link target="_blank" href="https://github.com/hashicorp/terraform/pull/33993" className={inlineLink}>
								Terraform
							</Link>
							.
						</p>
					</div>
				</section>

				{/* Stack */}
				<section aria-labelledby="stack-h" className="border-t border-zinc-900">
					<div className={`${container} py-16 flex flex-col gap-8`}>
						<div className="flex flex-wrap items-end justify-between gap-4">
							<h2 id="stack-h" className={sectionTitle}>
								Stack
							</h2>
							<Link
								href="/skills"
								className="inline-flex items-center gap-1.5 min-h-11 text-[15px] text-sky-300 hover:text-sky-200"
							>
								All skills <span aria-hidden="true">→</span>
							</Link>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
							{skillCategories.map((category) => (
								<div key={category.id} className="flex flex-col gap-3">
									<h3 className="text-sm font-medium uppercase tracking-[0.06em] text-zinc-400">
										{category.title}
									</h3>
									<ul className="flex flex-col gap-2.5">
										{category.skills.map((skill) => (
											<li
												key={skill.name}
												className="flex justify-between gap-3 pb-2.5 border-b border-zinc-900 text-[15px]"
											>
												<span className="text-zinc-100">{skill.name}</span>
												<span className="text-[13px] text-zinc-400">{skill.level}</span>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Contact */}
				<section id="contact" aria-labelledby="contact-h" className="border-t border-zinc-900 bg-[#0c0c0e]">
					<div className={`${container} py-20 flex flex-wrap items-center justify-between gap-8`}>
						<div className="flex-[1_1_420px] flex flex-col gap-3">
							<h2 id="contact-h" className="font-display text-[clamp(2rem,4vw,3rem)] leading-tight text-zinc-50">
								Need a hand with Kubernetes or AWS?
							</h2>
							<p className="text-[17px] leading-relaxed text-zinc-400">
								I take on consulting work alongside my role at Prodigy.
							</p>
						</div>
						<div className="flex flex-wrap gap-3">
							<Link href="mailto:web@denhertog.ca" className={btnPrimary}>
								<Mail size={18} aria-hidden="true" />
								web@denhertog.ca
							</Link>
							<Link target="_blank" href="https://github.com/andrewhertog" className={btnGhost}>
								<Github size={18} aria-hidden="true" />
								GitHub
							</Link>
							<Link target="_blank" href="https://x.com/adh88ca" className={btnGhost}>
								@adh88ca on X
							</Link>
						</div>
					</div>
				</section>
			</main>

			<footer className="border-t border-zinc-900">
				<div className={`${container} py-7 flex flex-wrap justify-between gap-4 text-sm text-zinc-400`}>
					<span>© {new Date().getFullYear()} Andrew den Hertog</span>
					<Link
						target="_blank"
						href="https://github.com/andrewhertog/my-portfolio"
						className="hover:text-zinc-200"
					>
						Source on GitHub
					</Link>
				</div>
			</footer>
		</div>
	);
}
