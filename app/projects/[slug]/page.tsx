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
	return {
	  title: slug.charAt(0).toUpperCase() + slug.slice(1),
	}
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

	return (
		<div className="bg-zinc-50 min-h-screen">
			<Header project={project} />

			<article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
				<Mdx code={project.body.code} />
			</article>
		</div>
	);
}
