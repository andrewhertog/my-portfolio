import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Metadata } from "next";
import { Proficiency, proficiencyColor, skillCategories } from "./data";

export const metadata: Metadata = {
	alternates: { canonical: "/skills" },
	title: "Skills",
};

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
						<section
							key={category.id}
							id={category.id}
							className="scroll-mt-24"
						>
							<Card>
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
						</section>
					))}
				</div>

				<div className="flex items-center gap-6 text-xs text-zinc-500">
					{(Object.keys(proficiencyColor) as Proficiency[]).map((level) => (
						<span key={level} className="flex items-center gap-1.5">
							<span
								className={`inline-block w-2 h-2 rounded-full ${proficiencyColor[level]}`}
							/>
							{level}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
