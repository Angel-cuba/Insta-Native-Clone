import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Image } from 'react-native-elements';
import LoginForm from '../components/loginScreen/LoginForm';
// import INSTA_LOGO from '../assets/insta.png';

const INSTA_LOGO = 'https://res.cloudinary.com/dqaerysgb/image/upload/v1632245932/paris_mulhc4.jpg';

const LoginScreen = () => (
	<View style={styles.container}>
		<View style={styles.logoContainer}>
			<Image
				style={[Platform.OS === 'macos' ? styles.imageIpad : styles.image]}
				source={require('../assets/insta.png')}
			/>
		</View>
		<LoginForm />
	</View>
);

export default LoginScreen;

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
