import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { Image } from 'react-native';
import { TextInput } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import validUrl from 'valid-url';

const FormikSchema = yup.object().shape({
	imageUrl: yup.string().url().required('A URL is required'),
	caption: yup.string().max(2200, 'Caption has reached the character'),
});

const DEFAULT_IMAGE =
	'https://res.cloudinary.com/dqaerysgb/image/upload/v1628766841/qpelx36hxluhbyfgcgdj.jpg';

const FormikPost = ({ navigation }) => {
	const [tockUrl, setTockUrl] = useState(DEFAULT_IMAGE);
	return (
		<Formik
			initialValues={{ caption: '', imageUrl: '' }}
			onSubmit={(values) => {
				console.log(values);
				navigation.goBack();
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
