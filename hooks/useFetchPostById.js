import { useEffect, useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';

export const useFetchPostById = (navigation, route) => {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const { id, title } = route.params;

	useEffect(() => {
		navigation.setOptions({
			title
		});

		axios.get('https://64c92919b2980cec85c1fe81.mockapi.io/post/' + id)
			.then(({ data }) => {
				setData(data);
			})
			.catch((err) => {
				console.log(err);
				Alert.alert('Error, can`t fetch post');
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);
	return { isLoading, data };
};