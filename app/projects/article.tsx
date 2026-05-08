import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";

type Props = {
	project: Project;
};

export const Article: React.FC<Props> = ({ project }) => {
	return (
		<Link href={`/projects/${project.slug}`}>
			<article className="p-4 md:p-8">
				<div className="flex justify-between gap-2 items-center">
					<span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
						{project.date ? (
							<time dateTime={new Date(project.date).toISOString()}>
								{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
									new Date(project.date),
								)}
							</time>
						) : (
							<span>SOON</span>
						)}
					</span>
				</div>
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
					{project.title}
				</h2>
				<p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
					{project.description}
				</p>
				{project.tags && project.tags.length > 0 && (
					<div className="flex flex-wrap gap-1 mt-4">
						{project.tags.map((tag) => (
							<span
								key={tag}
								className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700 group-hover:border-zinc-600 duration-500"
							>
								{tag}
							</span>
						))}
					</div>
				)}
			</article>
		</Link>
	);
};
