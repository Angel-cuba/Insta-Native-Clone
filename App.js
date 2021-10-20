import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Appearance,
	AppearanceProvider,
	useColorScheme,
} from 'react-native';
import AddNewPost from './components/newPost/AddNewPost';
import SignedInStack from './Navigation';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';

export default function App() {
	const colorScheme = Appearance.getColorScheme();
	console.log(colorScheme);
	if (colorScheme === 'light') {
	}
	return (
		<View style={styles.container}>
			<SignedInStack />
		</View>
	);
}
// <HomeScreen />
const styles = StyleSheet.create({
	container: {
		flex: 1,
		// color: 'black',
		// backgroundColor: 'blue',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	lightTheme: {
		backgroundColor: 'black',
		color: 'white',
	},
	darkTheme: {
		backgroundColor: 'silver',
		color: 'black',
	},
});
