import { client } from "@/sanity/lib/client";

export const dynamic = "force-static"; // ensures SSG in app router

export default async function PostsPage() {
	const posts = await client.fetch(`*[_type == "post"]{ title, slug }`);

	return (
		<div className="p-8">
			<h1 className="text-2xl font-bold mb-4">Posts</h1>
			<ul className="space-y-2">
				{posts.map((post) => (
					<li key={post.slug.current} className="text-lg">
						{post.title}
					</li>
				))}
			</ul>
		</div>
	);
}
