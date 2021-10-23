import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Divider, Icon, Image } from 'react-native-elements';
import { FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { postFooterIcons } from '../../data/icons';
import { firebase, db } from '../../firebase';

const Post = ({ post }) => {
	const [postAmount, setPostAmomunt] = useState([]);

	useEffect(() => {
		if (post.likes_by_user.length) setPostAmomunt(post.likes_by_user.length);
	}, []);

	const handleLike = (post) => {
		const currentLikeStatus = !post.likes_by_user.includes(firebase.auth().currentUser.email);
		db.collection('users')
			.doc(post.owner_email)
			.collection('posts')
			.doc(post.id)
			.update({
				likes_by_user: currentLikeStatus
					? firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.email)
					: firebase.firestore.FieldValue.arrayRemove(firebase.auth().currentUser.email),
			})
			.then(() => {
				console.log('Document updated');
			})
			.catch((error) => {
				console.log('Error updating document: ', error);
			});
	};

	return (
		<View style={{ marginBottom: 20 }}>
			<Divider width={0.23} orientation="vertical" color="rgba(255,255,255,0.2)" />
			<PostHeader post={post} />
			<PostImage post={post} />
			<View>
				<PostFooter post={post} handleLike={handleLike} />
				<View style={{ marginHorizontal: 3 }}>
					<Likes post={post} postAmount={postAmount} />
					<Caption post={post} />
					<CommentsSection post={post} />
					<Comments post={post} />
				</View>
			</View>
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
			height: 400,
		}}
	>
		<Image source={{ uri: post.imageUrl }} style={styles.postImage} />
	</View>
);

const PostFooter = ({ handleLike, post }) => (
	<View style={styles.postFooter}>
		<View style={{ flexDirection: 'row' }}>
			<TouchableOpacity style={{ paddingRight: 8 }} onPress={() => handleLike(post)}>
				<Icon
					type={postFooterIcons[0].type}
					imageStyle={styles.footerIcon}
					name={
						post.likes_by_user.includes(firebase.auth().currentUser.email)
							? postFooterIcons[0].likedIcon.likedIcon
							: postFooterIcons[0].icon
					}
					size={24}
					color={
						post.likes_by_user.includes(firebase.auth().currentUser.email)
							? postFooterIcons[0].likedIcon.color
							: postFooterIcons[0].color
					}
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
				<Icon
					type={postFooterIcons[3].type}
					imageStyle={styles.footerIcon}
					name={postFooterIcons[3].icon}
					size={24}
					color={postFooterIcons[3].color}
				/>
			</TouchableOpacity>
		</View>
	</View>
);

const Likes = ({ post, postAmount }) => (
	<View style={styles.likes(postAmount)}>
		<Text style={{ color: 'white', fontWeight: 'bold' }}>
			{post.likes_by_user.length === 1 ? (
				<Text>{post.likes_by_user.length.toLocaleString('en')} Like</Text>
			) : null}
			{post.likes_by_user.length > 1 && (
				<Text>{post.likes_by_user.length.toLocaleString('en')} Likes</Text>
			)}
		</Text>
	</View>
);

const Caption = ({ post }) => (
	<View style={{ marginTop: 5 }}>
		<Text style={{ color: 'white' }}>
			<Text style={{ fontWeight: '700', color: 'silver' }}>{post.user}</Text>
			<Text> {post.caption}</Text>
		</Text>
	</View>
);
const CommentsSection = ({ post }) => (
	<View>
		{!!post.comments.length && (
			<Text style={{ color: 'gray' }}>
				View{post.comments.length > 1 ? ' all' : ''}
				{post.comments.length > 1 ? ` ${post.comments.length} comments...` : ' comment'}
			</Text>
		)}
	</View>
);

const Comments = ({ post }) => (
	<>
		{post.comments.map((comment, index) => (
			<View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
				<Text style={{ color: 'white' }}>
					<Text style={{ fontWeight: '700' }}>{comment.user}</Text> {comment.comment}
				</Text>
			</View>
		))}
	</>
);

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
		width: '100%',
		resizeMode: 'contain',
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
	likes: (postAmount) => ({
		flexDirection: 'row',
		height: postAmount >= 1 ? 20 : 0,
	}),
});
