import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Divider, Icon, Image } from 'react-native-elements';
import { bottomIcons } from '../../data/bottomIcons';

const BottomTabs = () => {
	const [activeTab, setActiveTab] = useState('Home');

	return (
		<View>
			<View>
				<Divider width={0.3} orientation="horizontal" color="rgba(5,25,255,0.56917)" />

				<View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5 }}>
					<TouchableOpacity onPress={(e) => setActiveTab(bottomIcons[0].name)}>
						<Icon
							type={bottomIcons[0].type}
							imageStyle={styles.footerIcon}
							name={bottomIcons[0].icon}
							size={24}
							color={
								activeTab === bottomIcons[0].name
									? bottomIcons[0].colorActive
									: bottomIcons[0].colorInactive
							}
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setActiveTab(bottomIcons[1].name)}>
						<Icon
							type={bottomIcons[1].type}
							imageStyle={styles.footerIcon}
							name={bottomIcons[1].icon}
							size={26}
							color={
								activeTab === bottomIcons[1].name
									? bottomIcons[0].colorActive
									: bottomIcons[0].colorInactive
							}
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setActiveTab(bottomIcons[2].name)}>
						<Icon
							type={bottomIcons[2].type}
							imageStyle={styles.footerIcon}
							name={bottomIcons[2].icon}
							size={24}
							color={
								activeTab === bottomIcons[2].name
									? bottomIcons[0].colorActive
									: bottomIcons[0].colorInactive
							}
						/>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => setActiveTab(bottomIcons[3].name)}>
						<Icon
							type={bottomIcons[3].type}
							imageStyle={styles.footerIcon}
							name={bottomIcons[3].icon}
							size={24}
							color={
								activeTab === bottomIcons[3].name
									? bottomIcons[0].colorActive
									: bottomIcons[0].colorInactive
							}
						/>
					</TouchableOpacity>

					<View>
						<Image
							style={styles.image}
							source={{
								uri: 'https://res.cloudinary.com/dqaerysgb/image/upload/v1628020663/samples/food/spices.jpg',
							}}
						/>
					</View>
				</View>
			</View>
		</View>
	);
};
// const MaterialIcon = ({ props }) => {
// 	return <MaterialCommunityIcons {...props} />;
// };

export default BottomTabs;

const styles = StyleSheet.create({
	footerIcon: {
		width: 30,
		height: 30,
	},
	image: {
		width: 24,
		height: 24,
		// borderRadius: 50,
		marginLeft: 6,
		borderWidth: 0.18,
		borderColor: '#ff8501',
	},
});
