import { client } from "@/sanity/lib/client";
import PostList from "@/components/PostList";

export const dynamic = "force-static";

export default async function PostsPage() {
	const posts = await client.fetch(`*[_type == "post"]{ title, slug }`);

	return (
		<div className="p-8">
			<h1 className="text-2xl font-bold mb-4">Posts</h1>
			<PostList posts={posts} />
		</div>
	);
}
