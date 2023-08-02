import {
    View,
    Alert,
    FlatList,
    RefreshControl,
    TouchableOpacity, SafeAreaView
} from 'react-native';
import {Post} from "../components/Post/Post";
import {useEffect, useState} from "react";
import axios from "axios";
import Loading from "../components/Loading";


export default function HomeScreen({navigation}) {
    const [posts, setPosts] = useState()
    const [isLoading, setIsLoading] = useState(true)

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
            })
    }

    useEffect(fetchPosts, [])

    if (isLoading) {
        return <Loading/>
    }

    return (
        <SafeAreaView>
            <FlatList refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
                      data={[...posts, ...posts]}
                      renderItem={({item}) => (
                          <TouchableOpacity
                              onPress={() => navigation.navigate('FullPost', {id: item.id, title: item.title})}>
                              <Post key={item.id}
                                    title={item.title}
                                    createdAt={item.createdAt}
                                    imageUrl={item.imageUrl}/>
                          </TouchableOpacity>
                      )}/>
        </SafeAreaView>
    );
}


