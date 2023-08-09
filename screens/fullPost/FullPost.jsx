import React from 'react';
import { View } from 'react-native';
import { Loading } from '../../components';
import { S } from './FillPost.styles';
import { useFetchPostById } from '../../hooks';

export const FullPostScreen = ({ navigation, route }) => {
	const { isLoading, data } = useFetchPostById(navigation, route);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<View style={{ padding: 20 }}>
			<S.PostImage source={{ uri: data.imageUrl }} />
			<S.PostTitle>{data.title}</S.PostTitle>
			<S.PostText>{data.text}</S.PostText>
		</View>
	);
};

