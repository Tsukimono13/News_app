import React from 'react';
import S from "./Post.styles"

export const Post = ({title, imageUrl, createdAt}) => {
    const truncateTitle = (str) => {
        if (str.length >= 65) {
            return str.substring(0, 65) + '...';
        }
        return str;
    }
    return (
        <S.PostView>
            <S.PostImage
                source={{uri: imageUrl}}/>
            <S.PostDetails>
                <S.PostTitle>{truncateTitle(title)}</S.PostTitle>
                <S.PostData>{new Date(createdAt).toLocaleDateString()}</S.PostData>
            </S.PostDetails>
        </S.PostView>
    );
};


