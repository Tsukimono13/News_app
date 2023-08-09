import React from 'react';
import { S } from './Post.styles';
import { View } from 'react-native';
import { Chip } from 'react-native-paper';
import { truncateTitle } from '../../utils/truncateTitle';

export const Post = ({ title, imageUrl, createdAt, category }) => {
	return (
		<S.PostView>
			<S.PostImage
				source={{ uri: imageUrl }} />
			<S.PostDetails>
				<S.PostTitle>{truncateTitle(title)}</S.PostTitle>
				<View style={{ flexDirection: 'row' }}>
					<Chip style={{ backgroundColor: '#EEE8E8' }}
								textStyle={{ fontSize: 12 }}
								compact={true}>
						{category}
					</Chip>
				</View>
				<S.PostData>{new Date(createdAt).toLocaleDateString()}</S.PostData>
			</S.PostDetails>
		</S.PostView>
	);
};

