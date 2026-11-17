import { MetadataRoute } from "next";
import { allProjects } from ".contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {
	const staticPages: MetadataRoute.Sitemap = [
		{
			url: "https://denhertog.ca",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: "https://denhertog.ca/projects",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: "https://denhertog.ca/blog",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: "https://denhertog.ca/contact",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.5,
		},
	];

	const projectPages: MetadataRoute.Sitemap = allProjects
		.filter((p) => p.published)
		.map((project) => ({
			url: `https://denhertog.ca/projects/${project.slug}`,
			lastModified: project.date ? new Date(project.date) : new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.7,
		}));

	return [...staticPages, ...projectPages];
}
