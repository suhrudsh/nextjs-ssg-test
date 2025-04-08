"use client";

import { motion } from "motion/react";

export default function PostList({ posts }) {
	return (
		<ul className="space-y-2">
			{posts.map((post, index) => (
				<motion.li
					key={post.slug.current}
					initial={{ x: -20, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ delay: index * 0.1 }}
					className="text-lg"
				>
					{post.title}
				</motion.li>
			))}
		</ul>
	);
}
