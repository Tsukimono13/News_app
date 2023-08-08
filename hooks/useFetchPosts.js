/*
import axios from "axios";
import {Alert} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {useEffect, useState} from "react";

export const useFetchPosts = () => {
    const [posts, setPosts] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const fetchPosts = async () => {
        setIsLoading(true);

        try {
            const response = await axios.get('https://64c92919b2980cec85c1fe81.mockapi.io/post');
            setPosts(response.data);
        } catch (error) {
            console.log(error);
            Alert.alert('Error, can\'t fetch posts');
        } finally {
            setIsLoading(false);
            SplashScreen.hideAsync();
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return {posts, isLoading, fetchPosts}
};*/
