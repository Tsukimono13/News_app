import { useEffect, useState } from 'react';

export const useFilterPosts = (posts, category) => {
	const [filteredPosts, setFilteredPosts] = useState([]);
	useEffect(() => {
		if (category.length === 0) {
			setFilteredPosts(posts);
		} else {
			const filtered = posts.filter(post => category.includes(post.category));
			setFilteredPosts(filtered);
		}
	}, [category, posts]);
	return { filteredPosts };
};