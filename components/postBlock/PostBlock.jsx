import React from 'react';
import { FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import { Post } from '../post/Post';
import { Loading } from '../Loading';

export const PostBlock = ({ posts, isLoading, fetchPosts, navigation }) => {

	if (isLoading) {
		return <Loading />;
	}

	return (
		<FlatList refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
							data={posts}
							keyExtractor={item => item.id.toString()}
							renderItem={({ item }) => (
								<TouchableOpacity
									onPress={() => navigation.navigate('FullPost', { id: item.id, title: item.title })}>
									<Post key={item.id}
												title={item.title}
												createdAt={item.createdAt}
												imageUrl={item.imageUrl}
												category={item.category}
									/>
								</TouchableOpacity>
							)} />
	);
};


