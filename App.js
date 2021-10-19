import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AddNewPost from './components/newPost/AddNewPost';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';

export default function App() {
	return <NewPostScreen />;
}
// <HomeScreen />
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
