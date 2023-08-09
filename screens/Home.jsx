import { SafeAreaView } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { CategoryFilter } from '../components';
import { PostBlock } from '../components';
import { useFetchPosts } from '../hooks';
import { useFilterPosts } from '../hooks';


export default function HomeScreen({ navigation }) {
	const [category, setCategory] = useState([]);

	const { posts, isLoading, fetchPosts } = useFetchPosts();
	const { filteredPosts } = useFilterPosts(posts, category);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<CategoryFilter category={category}
											setCategory={setCategory} />
			<PostBlock posts={filteredPosts}
								 isLoading={isLoading}
								 fetchPosts={fetchPosts}
								 navigation={navigation}
			/>
		</SafeAreaView>
	);
}

