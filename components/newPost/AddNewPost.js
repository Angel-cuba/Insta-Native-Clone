import React from 'react';
import { StyleSheet, Text, View, Platform, SafeAreaView } from 'react-native';
import { Image } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import FormikPost from './FormikPost';

const AddNewPost = ({ navigation }) => (
	<View style={styles.container}>
		<Header navigation={navigation} />
		<FormikPost navigation={navigation} />
	</View>
);

const Header = ({ navigation }) => (
	<SafeAreaView style={Platform.OS === 'android' && styles.android}>
		<View style={[styles.headerContainer]}>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<FontAwesome name="angle-left" size={24} color="white" />
			</TouchableOpacity>
			<Text style={styles.headerText}>New post</Text>

			<Text></Text>
		</View>
	</SafeAreaView>
);

export default AddNewPost;

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 14,
		paddingLeft: 4,
		paddingTop: 8,
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	headerText: {
		color: 'white',
		fontWeight: '700',
		fontSize: 20,
		marginRight: 25,
	},
	android: {
		marginTop: 32,
	},
});
