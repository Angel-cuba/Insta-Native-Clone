import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

const screenOptions = {
	headerShown: false,
};

const SignedInStack = () => (
	<NavigationContainer>
		<Stack.Navigator initialRouteName="LoginScreen" screenOptions={screenOptions}>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			<Stack.Screen name="NewPostScreen" component={NewPostScreen} />
			<Stack.Screen name="LoginScreen" component={LoginScreen} />
		</Stack.Navigator>
	</NavigationContainer>
);

export default SignedInStack;

const styles = StyleSheet.create({});
