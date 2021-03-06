import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const screenOptions = {
	headerShown: false,
};

export const SignedInStack = () => (
	<NavigationContainer>
		<Stack.Navigator initialRouteName="HomeScreen" screenOptions={screenOptions}>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			<Stack.Screen name="NewPostScreen" component={NewPostScreen} />
		</Stack.Navigator>
	</NavigationContainer>
);

export const SignedOutStack = () => (
	<NavigationContainer>
		<Stack.Navigator initialRouteName="LoginScreen" screenOptions={screenOptions}>
			<Stack.Screen name="LoginScreen" component={LoginScreen} />
			<Stack.Screen name="SignUpScreen" component={SignUpScreen} />
		</Stack.Navigator>
	</NavigationContainer>
);

const styles = StyleSheet.create({});
