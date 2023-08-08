import React, {useState} from 'react';
import {FlatList, RefreshControl, TouchableOpacity, View} from "react-native";
import {Post} from "../post/Post";
import Loading from "../Loading";

const PostBlock = ({posts, isLoading}) => {

    if (isLoading) {
        return <Loading/>
    }

    return (
        <View>
            <FlatList refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
                      data={posts}
                      renderItem={({item}) => (
                          <TouchableOpacity
                              onPress={() => navigation.navigate('FullPost', {id: item.id, title: item.title})}>
                              <Post key={item.id}
                                    title={item.title}
                                    createdAt={item.createdAt}
                                    imageUrl={item.imageUrl}
                                    category={item.category}
                              />
                          </TouchableOpacity>
                      )}/>
        </View>
    );
};

export default PostBlock;