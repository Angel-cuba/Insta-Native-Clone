import React from 'react';
import { SafeAreaView, Platform, Appearance } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import AddNewPost from '../components/newPost/AddNewPost';

const NewPostScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={[styles.safeAreaView, Platform.OS === 'android' && styles.android]}>
			<AddNewPost navigation={navigation} />
		</SafeAreaView>
	);
};

export default NewPostScreen;

const styles = StyleSheet.create({
	safeAreaView: {
		backgroundColor: 'black',
		color: 'black',
		flex: 1,
	},
	android: {
		// marginTop: 16,
	},
});
