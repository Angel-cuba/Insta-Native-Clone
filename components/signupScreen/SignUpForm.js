import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import Validator from 'email-validator';

const SignUpForm = ({ navigation }) => {
	const SignUpSchema = yup.object().shape({
		email: yup.string().email().required('An email address is required'),
		username: yup
			.string()
			.required('Username is required')
			.min(3, 'Please enter at least 2 characters.')
			.max(20, 'You might not need more than 20 characters.'),
		password: yup
			.string()
			.required('Password is required')
			.min(6, 'Please enter at least 6 characters.')
			.max(20, 'Yooo, less than 20 characters...'),
	});
	return (
		<View style={styles.wrapper}>
			<Formik
				initialValues={{ email: '', username: '', password: '' }}
				onSubmit={(values) => console.log(values)}
				validationSchema={SignUpSchema}
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
										1 > values.username.length || values.username.length >= 3 ? '#ccc' : 'red',
								},
							]}
						>
							<TextInput
								placeholderTextColor="#444"
								placeholder="Username"
								autoCapitalize="none"
								autoCorrect={false}
								keyboardType="username"
								textContentType="username"
								onChangeText={handleChange('username')}
								onBlur={handleBlur('username')}
								values={values.username}
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

						<Pressable titleSize={20} style={styles.button(isValid)} onPress={handleSubmit}>
							<Text style={styles.buttonText}>Sign Up</Text>
						</Pressable>
						<View style={styles.signUpContainer}>
							<Text>Already have a account </Text>
							<TouchableOpacity onPress={() => navigation.goBack()}>
								<Text style={{ color: 'navy' }}>Log In</Text>
							</TouchableOpacity>
						</View>
					</>
				)}
			</Formik>
		</View>
	);
};

export default SignUpForm;

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
		marginTop: 20,
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
