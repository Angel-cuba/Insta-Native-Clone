import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SignedInStack, SignedOutStack } from './Navigation';
import { firebase } from './firebase';

import { LogBox } from 'react-native';
import _ from 'lodash';

LogBox.ignoreLogs(['Warning:...']); // ignore specific logs
LogBox.ignoreAllLogs(); // ignore all logs
const _console = _.clone(console);
console.warn = (message) => {
	if (message.indexOf('Setting a timer') <= -1) {
		_console.warn(message);
	}
};

const AuthNavigation = () => {
	const [currentUser, setCurrentUser] = useState(null);
	const userHandler = (user) => (user ? setCurrentUser(user) : setCurrentUser(null));

	useEffect(() => firebase.auth().onAuthStateChanged((user) => userHandler(user)), []);
	return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>;
};

export default AuthNavigation;

const styles = StyleSheet.create({});
