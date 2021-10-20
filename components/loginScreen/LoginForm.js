import React from 'react';
import { Pressable, TouchableOpacity } from 'react-native';
import { Platform } from 'react-native';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View, Button } from 'react-native';
//import { } from 'react-native-elements';
import { Formik } from 'formik';
import * as yup from 'yup';
import Validator from 'email-validator';

const LoginForm = () => {
	const LoginFormSchema = yup.object().shape({
		email: yup.string().email().required('An email is required'),
		password: yup.string().required().min(8, 'Your password has to have at least 8 characters'),
	});

	return (
		<View style={styles.wrapper}>
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(values) => console.log(values)}
				validationSchema={LoginFormSchema}
				validateOnMount={true}
			>
				{({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
					<>
						<View style={styles.inputField}>
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
						<View style={styles.inputField}>
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

						<Pressable titleSize={20} style={styles.button} onPress={handleSubmit}>
							<Text style={styles.buttonText}>Log In</Text>
						</Pressable>
						<View style={styles.signUpContainer}>
							<Text>Don't have a account </Text>
							<TouchableOpacity>
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
	button: {
		backgroundColor: '#0096F6',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: 40,
		borderRadius: 4,
	},
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
