import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-elements';
import SignUpForm from '../components/signupScreen/SignUpForm';

const SignUpScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Image
					style={[Platform.OS === 'macos' ? styles.imageIpad : styles.image]}
					source={require('../assets/insta.png')}
				/>
			</View>
			<SignUpForm navigation={navigation} />
		</View>
	);
};

export default SignUpScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'silver',
		paddingTop: 15,
		paddingHorizontal: 14,
	},
	logoContainer: {
		alignItems: 'center',
		marginTop: 50,
	},
	image: {
		height: 120,
		width: 120,
	},
	imageIpad: {
		height: 160,
		width: 160,
	},
});
