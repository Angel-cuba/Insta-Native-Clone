import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { USERS } from '../../data/user';

const Stories = () => {
	return (
		<View style={{ marginBottom: 14 }}>
			<ScrollView horizontal showHorizontalScroll={false}>
				{USERS.map((story, index) => (
					<View key={index}>
						<Image source={{ uri: story.image }} style={styles.story} />
						<Text style={styles.text}>
							{story.user.length > 8
								? story.user.slice(0, 8).toLowerCase() + '...'
								: story.user.toLowerCase()}
						</Text>
					</View>
				))}
			</ScrollView>
		</View>
	);
};

export default Stories;

const styles = StyleSheet.create({
	story: {
		width: 70,
		height: 70,
		borderRadius: 50,
		marginLeft: 6,
		borderWidth: 1.8,
		borderColor: '#ff8501',
	},
	text: {
		color: 'silver',
		textAlign: 'center',
		fontWeight: '700',
	},
});
