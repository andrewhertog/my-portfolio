import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Skills",
};

type Proficiency = "Expert" | "Advanced" | "Intermediate";

interface Skill {
	name: string;
	level: Proficiency;
}

interface SkillCategory {
	title: string;
	skills: Skill[];
}

const proficiencyColor: Record<Proficiency, string> = {
	Expert: "bg-emerald-400",
	Advanced: "bg-sky-400",
	Intermediate: "bg-amber-400",
};

const skillCategories: SkillCategory[] = [
	{
		title: "Cloud & Infrastructure",
		skills: [
			{ name: "AWS", level: "Expert" },
			{ name: "Terraform", level: "Advanced" },
			{ name: "CloudFormation", level: "Advanced" },
			{ name: "GCP", level: "Intermediate" },
		],
	},
	{
		title: "Orchestration & Runtime",
		skills: [
			{ name: "Kubernetes", level: "Expert" },
			{ name: "Docker", level: "Expert" },
			{ name: "Istio", level: "Advanced" },
			{ name: "Helm", level: "Expert" },
		],
	},
	{
		title: "CI/CD & DevOps",
		skills: [
			{ name: "Jenkins", level: "Expert" },
			{ name: "GitHub Actions", level: "Advanced" },
			{ name: "ArgoCD", level: "Advanced" },
			{ name: "JFrog Artifactory", level: "Advanced" },
		],
	},
	{
		title: "Observability & SRE",
		skills: [
			{ name: "Datadog", level: "Advanced" },
			{ name: "Prometheus", level: "Advanced" },
			{ name: "Grafana", level: "Advanced" },
			{ name: "PagerDuty", level: "Advanced" },
		],
	},
];

export default function SkillsPage() {
	return (
		<div className="relative pb-16">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Skills
					</h2>
					<p className="mt-4 text-zinc-400">
						Technologies and tools I work with day to day.
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2">
					{skillCategories.map((category) => (
						<Card key={category.title}>
							<div className="relative p-6 md:p-8">
								<h3 className="text-lg font-semibold text-zinc-100">
									{category.title}
								</h3>
								<ul className="mt-4 space-y-3">
									{category.skills.map((skill) => (
										<li
											key={skill.name}
											className="flex items-center justify-between text-sm text-zinc-300"
										>
											<span>{skill.name}</span>
											<span className="flex items-center gap-2 text-xs text-zinc-500">
												<span
													className={`inline-block w-2 h-2 rounded-full ${proficiencyColor[skill.level]}`}
												/>
												{skill.level}
											</span>
										</li>
									))}
								</ul>
							</div>
						</Card>
					))}
				</div>

				<div className="flex items-center gap-6 text-xs text-zinc-500">
					<span className="flex items-center gap-1.5">
						<span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
						Expert
					</span>
					<span className="flex items-center gap-1.5">
						<span className="inline-block w-2 h-2 rounded-full bg-sky-400" />
						Advanced
					</span>
					<span className="flex items-center gap-1.5">
						<span className="inline-block w-2 h-2 rounded-full bg-amber-400" />
						Intermediate
					</span>
				</div>
			</div>
		</div>
	);
}
