import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BottomTabs from '../components/home/BottomTabs';
import Header from '../components/home/Header';
import Post from '../components/home/Post';
import Stories from '../components/home/Stories';
import { POSTS } from '../data/post';
import { db } from '../firebase';

const HomeScreen = ({ navigation }) => {
	useEffect(() => {
		db.collectionGroup('posts').onSnapshot((snapshot) => {
			console.log(snapshot.docs.map((doc) => doc.data()));
		});
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<Header navigation={navigation} />
			<Stories />
			<ScrollView>
				{POSTS.map((post, index) => (
					<Post post={post} key={index} />
				))}
			</ScrollView>
			<BottomTabs />
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black',
		flex: 1,
		color: 'white',
	},
});
