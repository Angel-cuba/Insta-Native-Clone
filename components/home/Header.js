import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { firebase } from '../../firebase';

const Header = ({ navigation }) => {
	const SignOut = async () => {
		try {
			await firebase
				.auth()
				.signOut()
				.then(() => console.log('Out'));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View style={Platform.OS === 'android' && styles.android}>
			<View style={styles.container}>
				<TouchableOpacity onPress={SignOut}>
					<Image style={styles.image} source={require('../../assets/insta1.png')} />
				</TouchableOpacity>
				<View style={styles.iconsContainer}>
					<TouchableOpacity style={styles.icon} onPress={() => navigation.push('NewPostScreen')}>
						<FontAwesome name="plus-square-o" size={24} color="white" />
					</TouchableOpacity>
					<TouchableOpacity style={styles.icon}>
						<AntDesign name="hearto" size={24} color="white" />
					</TouchableOpacity>
					<TouchableOpacity style={styles.icon}>
						<View style={styles.unreadBadge}>
							<Text style={styles.unreadBadgeText}>11</Text>
						</View>
						<AntDesign name="message1" size={24} color="white" />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		marginHorizontal: 20,
	},
	android: {
		marginTop: 25,
	},
	image: {
		width: 100,
		height: 60,
		resizeMode: 'contain',
	},
	iconsContainer: {
		flexDirection: 'row',
	},
	icon: {
		marginLeft: 18,
	},
	unreadBadge: {
		backgroundColor: '#FF3250',
		position: 'absolute',
		bottom: 15,
		left: 14,
		zIndex: 1000,
		width: 25,
		height: 19,
		borderRadius: 25,
		alignItems: 'center',
	},
	unreadBadgeText: {
		color: 'white',
		fontWeight: '600',
	},
});
