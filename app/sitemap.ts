import { MetadataRoute } from "next";
import { allProjects } from "contentlayer/generated";

const baseUrl = "https://denhertog.ca";

export default function sitemap(): MetadataRoute.Sitemap {
	const pages = ["", "/projects", "/blog", "/contact"].map((path) => ({
		url: `${baseUrl}${path}`,
		lastModified: new Date(),
	}));

	const projects = allProjects
		.filter((p) => p.published)
		.map((p) => ({
			url: `${baseUrl}/projects/${p.slug}`,
			lastModified: p.date ? new Date(p.date) : new Date(),
		}));

	return [...pages, ...projects];
}
