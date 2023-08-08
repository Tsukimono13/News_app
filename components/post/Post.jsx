import React from 'react';
import {S} from "./Post.styles"
import {Text} from "react-native";

export const Post = ({title, imageUrl, createdAt, category}) => {
    const truncateTitle = (str) => {
        if (str.length >= 50) {
            return str.substring(0, 50) + '...';
        }
        return str;
    }
    return (
        <S.PostView>
            <S.PostImage
                source={{uri: imageUrl}}/>
            <S.PostDetails>
                <S.PostTitle>{truncateTitle(title)}</S.PostTitle>
                <Text>{category}</Text>
                <S.PostData>{new Date(createdAt).toLocaleDateString()}</S.PostData>
            </S.PostDetails>
        </S.PostView>
    );
};


