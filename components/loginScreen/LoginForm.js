import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Pressable,
	Alert,
	TouchableOpacity,
	TextInput,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import Validator from 'email-validator';
import firebase from '../../firebase';

const LoginForm = ({ navigation }) => {
	const LoginFormSchema = yup.object().shape({
		email: yup.string().email().required('An email is required'),
		password: yup.string().required().min(6, 'Your password has to have at least 8 characters'),
	});

	const onLogin = async (email, password) => {
		try {
			await firebase.auth().signInWithEmailAndPassword(email, password);
			console.log('Good way to be inside the App🥰', email, password);
		} catch (error) {
			Alert.alert('🥽 Yooo ...', error.message + '\n\n ... What do you want to do next?', [
				{
					text: 'OK',
					onPress: () => console.log('OK'),
					style: 'cancel',
				},
				{
					text: 'Sign Up',
					onPress: () => navigation.push('SignUpScreen'),
				},
			]);
		}
	};

	return (
		<View style={styles.wrapper}>
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(values) => onLogin(values.email, values.password)}
				validationSchema={LoginFormSchema}
				validateOnMount={true}
			>
				{({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
					<>
						<View
							style={[
								styles.inputField,
								{
									borderColor:
										values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red',
								},
							]}
						>
							<TextInput
								placeholderTextColor="#444"
								placeholder="Phone number, username or email address"
								autoCapitalize="none"
								autoCorrect={false}
								keyboardType="email-address"
								textContentType="emailAddress"
								autoFocus={true}
								onChangeText={handleChange('email')}
								onBlur={handleBlur('email')}
								values={values.email}
							/>
						</View>
						<View
							style={[
								styles.inputField,
								{
									borderColor:
										1 > values.password.length || values.password.length >= 6 ? '#ccc' : 'red',
								},
							]}
						>
							<TextInput
								placeholderTextColor="#444"
								placeholder="Password"
								autoCapitalize="none"
								secureTextEntry={true}
								textContentType="password"
								autoCorrect={false}
								onChangeText={handleChange('password')}
								onBlur={handleBlur('password')}
								values={values.password}
							/>
						</View>
						<View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
							<Text style={{ color: 'navy' }}>Forgot password..?</Text>
						</View>

						<Pressable titleSize={20} style={styles.button(isValid)} onPress={handleSubmit}>
							<Text style={styles.buttonText}>Log In</Text>
						</Pressable>
						<View style={styles.signUpContainer}>
							<Text>Don't have a account </Text>
							<TouchableOpacity onPress={() => navigation.push('SignUpScreen')}>
								<Text style={{ color: 'navy' }}>Sign Up</Text>
							</TouchableOpacity>
						</View>
					</>
				)}
			</Formik>
		</View>
	);
};

export default LoginForm;

const styles = StyleSheet.create({
	wrapper: {
		marginTop: 70,
	},
	inputField: {
		borderRadius: 5,
		padding: 12,
		backgroundColor: '#FAFAFA',
		marginBottom: 10,
		borderWidth: 0.5,
	},
	button: (isValid) => ({
		backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: 40,
		borderRadius: 4,
	}),
	buttonText: {
		fontWeight: '600',
		color: 'white',
		fontSize: 20,
	},
	signUpContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 16,
	},
});
