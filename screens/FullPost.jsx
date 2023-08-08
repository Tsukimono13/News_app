import React, {useEffect, useState} from 'react';
import styled from "styled-components/native";
import {Alert, Button, Text, View} from "react-native";
import axios from "axios";
import Loading from "../components/Loading";

export const FullPostScreen = ({navigation, route}) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const {id, title} = route.params;


    useEffect(() => {
        navigation.setOptions({
            title
        })
        axios.get('https://64c92919b2980cec85c1fe81.mockapi.io/post/' + id)
            .then(({data}) => {
                setData(data)
            })
            .catch((err) => {
                console.log(err)
                Alert.alert('Error, can`t fetch post')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    if (isLoading) {
        return <Loading/>
    }

    return (
        <View style={{padding: 20}}>
            <PostImage source={{uri: data.imageUrl}}/>
            <PostTitle>{data.title}</PostTitle>
            <PostText>{data.text}</PostText>
        </View>
    );
};


const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`

const PostTitle = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
  text-align: left;
  font-weight: bold;
`