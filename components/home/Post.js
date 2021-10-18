import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Divider, Icon, Image } from 'react-native-elements';
import { FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { postFooterIcons } from '../../data/icons';

const Post = ({ post }) => {
	return (
		<View style={{ marginBottom: 20 }}>
			<Divider width={0.5} orientation="vertical" />
			<PostHeader post={post} />
			<PostImage post={post} />
			<PostFooter />
		</View>
	);
};

const PostHeader = ({ post }) => (
	<View style={styles.postHeader}>
		<View style={styles.postInnerHeader}>
			<Image source={{ uri: post.profile_picture }} style={styles.imageProfile} />
			<Text style={styles.textProfile}>{post.user}</Text>
		</View>

		<Text style={{ color: 'white', fontWeight: '900' }}> ... </Text>
	</View>
);

const PostImage = ({ post }) => (
	<View
		style={{
			width: '100%',
			height: 450,
		}}
	>
		<Image source={{ uri: post.imageUrl }} style={styles.postImage} />
	</View>
);

const PostFooter = () => (
	<View style={styles.postFooter}>
		<View style={{ flexDirection: 'row' }}>
			<TouchableOpacity style={{ paddingRight: 8 }}>
				<Icon
					type={postFooterIcons[0].type}
					imageStyle={styles.footerIcon}
					name={postFooterIcons[0].icon}
					size={24}
					color={postFooterIcons[0].color}
				/>
			</TouchableOpacity>
			<TouchableOpacity style={{ paddingRight: 8 }}>
				<Icon
					type={postFooterIcons[1].type}
					imageStyle={styles.footerIcon}
					name={postFooterIcons[1].icon}
					size={26}
					color={postFooterIcons[1].color}
				/>
			</TouchableOpacity>
			<TouchableOpacity>
				<Icon
					type={postFooterIcons[2].type}
					imageStyle={styles.footerIcon}
					name={postFooterIcons[2].icon}
					size={24}
					color={postFooterIcons[2].color}
				/>
			</TouchableOpacity>
		</View>
		<View>
			<TouchableOpacity>
				<Text style={{ color: 'white' }}>Hola</Text>
			</TouchableOpacity>
		</View>

		{/* <Icon type="ant-design" name="hearto" size={24} color={postFooterIcons[0].color} /> */}
		{/* <Icon imageStyle={styles.footerIcon} imageUrl={postFooterIcons[0].imageUrl} /> */}
	</View>
);

// const Icon = ({ imageStyle, imageUrl }) => (
// 	<TouchableOpacity>
// 		<AntDesign style={imageStyle} name={imageUrl} size={24} color="white" />
// 		{/* <Image style={imageStyle} source={{ uri: imageUrl }} /> */}
// 	</TouchableOpacity>
// );

export default Post;

const styles = StyleSheet.create({
	postHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 5,
		alignItems: 'center',
	},
	postInnerHeader: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	imageProfile: {
		width: 30,
		height: 30,
		borderRadius: 50,
		marginLeft: 6,
		borderWidth: 1.2,
		borderColor: '#ff8501',
	},
	textProfile: {
		color: 'white',
		fontWeight: 'bold',
		marginLeft: 5,
	},
	postImage: {
		height: '100%',
		resizeMode: 'cover',
	},
	footerIcon: {
		width: 33,
		height: 33,
	},
	postFooter: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 5,
		marginTop: 10,
	},
});
