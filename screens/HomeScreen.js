import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/home/Header';
import Post from '../components/home/Post';
import Stories from '../components/home/Stories';
import { POSTS } from '../data/post';

const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Hola desde Home</Text>
			<Header />
			<Stories />
			<ScrollView>
				{POSTS.map((post, index) => (
					<Post post={post} key={index} />
				))}
			</ScrollView>
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