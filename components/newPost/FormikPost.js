import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { Image } from 'react-native';
import { TextInput } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import validUrl from 'valid-url';
import { firebase, db } from '../../firebase';

const FormikSchema = yup.object().shape({
	imageUrl: yup.string().url().required('A URL is required'),
	caption: yup.string().max(2200, 'Caption has reached the character'),
});

const DEFAULT_IMAGE =
	'https://res.cloudinary.com/dqaerysgb/image/upload/v1628766841/qpelx36hxluhbyfgcgdj.jpg';

const FormikPost = ({ navigation }) => {
	const [tockUrl, setTockUrl] = useState(DEFAULT_IMAGE);
	const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);
	console.log(currentLoggedInUser);

	const getuserName = () => {
		const user = firebase.auth().currentUser;
		const unsubscribe = db
			.collection('users')
			.where('owner_uid', '==', user.uid)
			.limit(1)
			.onSnapshot((snapshot) =>
				snapshot.docs.map((doc) => {
					setCurrentLoggedInUser({
						username: doc.data().username,
						profilePicture: doc.data().profile_picture,
					});
				})
			);
		return unsubscribe;
	};

	useEffect(() => {
		getuserName();
		console.log(currentLoggedInUser);
	}, []);

	const uploadPostToFirebase = (imageUrl, caption) => {
		const unsubscribe = db
			.collection('users')
			.doc(firebase.auth().currentUser.email)
			.collection('posts')
			.add({
				imageUrl: imageUrl,
				user: currentLoggedInUser.username,
				profile_picture: currentLoggedInUser.profilePicture,
				owner_uid: firebase.auth().currentUser.uid,
				owner_email: firebase.auth().currentUser.email,
				caption: caption,
				createdAt: firebase.firestore.FieldValue.serverTimestamp(),
				likes_by_user: [],
				comments: [],
			})
			.then(() => navigation.goBack());
		console.log(unsubscribe);
		return unsubscribe;
	};

	return (
		<Formik
			initialValues={{ caption: '', imageUrl: '' }}
			onSubmit={(values) => {
				uploadPostToFirebase(values.imageUrl, values.caption);
				// console.log(values);
			}}
			validationSchema={FormikSchema}
			validateOnMount={true}
		>
			{({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
				<>
					<View style={{ margin: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
						<Image
							source={{ uri: validUrl.isUri(tockUrl) ? tockUrl : DEFAULT_IMAGE }}
							style={styles.image}
						/>
						<View style={{ flex: 1, marginLeft: 20 }}>
							<TextInput
								style={styles.inputStyle}
								placeholder="Write a caption..."
								placeholderTextColor="white"
								multiline={true}
								onChangeText={handleChange('caption')}
								onBlur={handleBlur('caption')}
								value={values.caption}
							/>
						</View>
					</View>
					<Divider width={0.2} orientation="vertical" />
					<TextInput
						onChange={(e) => setTockUrl(e.nativeEvent.text)}
						style={styles.inputStyle}
						placeholder="Enter image Url"
						placeholderTextColor="white"
						onChangeText={handleChange('imageUrl')}
						onBlur={handleBlur('imageUrl')}
						value={values.imageUrl}
					/>
					{errors.imageUrl && (
						<Text style={{ fontWeight: 'bold', fontSize: 12, color: 'red' }}>
							{errors.imageUrl}
						</Text>
					)}

					<Button onPress={handleSubmit} title="Share" disabled={!isValid} />
				</>
			)}
		</Formik>
	);
};

export default FormikPost;

const styles = StyleSheet.create({
	image: {
		width: 100,
		height: 100,
	},
	inputStyle: {
		color: 'white',
		fontSize: 20,
		// width: '70%',
	},
});
