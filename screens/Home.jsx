import {
    View,
    Alert,
    FlatList,
    RefreshControl,
    TouchableOpacity, SafeAreaView, ScrollView
} from 'react-native';
import React from 'react';
import {Post} from "../components/post/Post";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import Loading from "../components/Loading";
import * as SplashScreen from 'expo-splash-screen';
import CategoryFilter from "../components/filters/categoryFilter/categoryFilter";
import {SelectProvider} from "@mobile-reality/react-native-select-pro";
import PostBlock from "../components/postBlock/PostBlock";
import {useFetchPosts} from "../hooks/useFetchPosts";


export default function HomeScreen({navigation}) {
    const [category, setCategory] = useState([]);
    const [posts, setPosts] = useState()
    const [isLoading, setIsLoading] = useState(true)
    console.log(category)

    SplashScreen.preventAutoHideAsync();

    //const {posts, isLoading, fetchPosts} = useFetchPosts()

    const fetchPosts = () => {
        setIsLoading(true)
        axios.get('https://64c92919b2980cec85c1fe81.mockapi.io/post')
            .then(({data}) => {
                setPosts(data)
            })
            .catch((err) => {
                console.log(err)
                Alert.alert('Error, can`t fetch posts')
            })
            .finally(() => {
                setIsLoading(false)
                SplashScreen.hideAsync();
            })
    }
    useEffect(fetchPosts, [])


    return (
        <SafeAreaView>
            <CategoryFilter category={category} setCategory={setCategory}/>
            <PostBlock posts={posts} isLoading={isLoading}/>
        </SafeAreaView>
    );
}


