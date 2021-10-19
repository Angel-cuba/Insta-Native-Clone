import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Image } from 'react-native';
import { TextInput } from 'react-native';

const FormikSchema = yup.object().shape({
	imageUrl: yup.string().url().required('A URL is required'),
	caption: yup.string().max(2200, 'Caption has reached the character'),
});

const DEFAULT_IMAGE =
	'https://res.cloudinary.com/dqaerysgb/image/upload/v1628766841/qpelx36hxluhbyfgcgdj.jpg';

const FormikPost = () => {
	const [tockUrl, setTockUrl] = useState(DEFAULT_IMAGE);
	return (
		<Formik
			initialValues={{ caption: '', imageUrl: '' }}
			onSubmit={(values) => console.log(values)}
			validationSchema={FormikSchema}
		>
			{({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
				<>
					<View>
						<Image />
					</View>
					<TextInput placeholder="Hello" placeholderTextColor="white" />
				</>
			)}
		</Formik>
	);
};

export default FormikPost;

const styles = StyleSheet.create({});
