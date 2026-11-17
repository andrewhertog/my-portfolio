export type Proficiency = "Expert" | "Advanced" | "Intermediate";

export interface Skill {
	name: string;
	level: Proficiency;
}

export interface SkillCategory {
	id: string;
	title: string;
	skills: Skill[];
}

export const proficiencyColor: Record<Proficiency, string> = {
	Expert: "bg-emerald-400",
	Advanced: "bg-sky-400",
	Intermediate: "bg-amber-400",
};

export const skillCategories: SkillCategory[] = [
	{
		id: "cloud",
		title: "Cloud & Infrastructure",
		skills: [
			{ name: "AWS", level: "Expert" },
			{ name: "Terraform", level: "Advanced" },
			{ name: "CloudFormation", level: "Advanced" },
			{ name: "GCP", level: "Intermediate" },
		],
	},
	{
		id: "orchestration",
		title: "Orchestration & Runtime",
		skills: [
			{ name: "Kubernetes", level: "Expert" },
			{ name: "Docker", level: "Expert" },
			{ name: "Istio", level: "Advanced" },
			{ name: "Helm", level: "Expert" },
		],
	},
	{
		id: "cicd",
		title: "CI/CD & DevOps",
		skills: [
			{ name: "Jenkins", level: "Expert" },
			{ name: "GitHub Actions", level: "Advanced" },
			{ name: "ArgoCD", level: "Advanced" },
			{ name: "JFrog Artifactory", level: "Advanced" },
		],
	},
	{
		id: "observability",
		title: "Observability & SRE",
		skills: [
			{ name: "Datadog", level: "Advanced" },
			{ name: "Prometheus", level: "Advanced" },
			{ name: "Grafana", level: "Advanced" },
			{ name: "PagerDuty", level: "Advanced" },
		],
	},
];
