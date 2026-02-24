import { notFound } from "next/navigation";
import { allProjects } from ".contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { Metadata, ResolvingMetadata } from 'next'

export const revalidate = 60;

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
  ): Promise<Metadata> {

	const { slug } = await params;
	const project = allProjects.find((p) => p.slug === slug);

	if (!project) {
		return { title: slug.charAt(0).toUpperCase() + slug.slice(1) };
	}

	return {
		title: project.title,
		description: project.description,
		alternates: {
			canonical: `/projects/${slug}`,
		},
		openGraph: {
			title: project.title,
			description: project.description,
			type: "article",
			url: `/projects/${slug}`,
		},
		twitter: {
			card: "summary_large_image",
			title: project.title,
			description: project.description,
		},
	};
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
	return allProjects
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
}

export default async function PostPage({ params }: Props) {
	const { slug } = await params;
	const project = allProjects.find((project) => project.slug === slug);

	if (!project) {
		notFound();
	}

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: project.title,
		description: project.description,
		datePublished: project.date,
		author: {
			"@type": "Person",
			name: "Andrew den Hertog",
			url: "https://denhertog.ca",
		},
	};

	return (
		<div className="bg-zinc-50 min-h-screen">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<Header project={project} />

			<article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
				<Mdx code={project.body.code} />
			</article>
		</div>
	);
}
