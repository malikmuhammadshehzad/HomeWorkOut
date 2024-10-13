import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { IMAGES, SVG } from "../../assets";
import { COLORS } from "../../theme";

const date = new Date();

export default function Message(props) {
	return (
		<View style={styles.main}>
		<View style={styles.message}>
			{/* <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
				<View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
					<Image source={IMAGES.User} style={styles.icon}/>
					<Text style={{ fontWeight: 500 }}>User</Text>
				</View>
			</View> */}
			<Text style={{ fontSize: 14, width: "100%", flex: 1, paddingLeft: 0, color:COLORS.black }}>{props.message}</Text>
			<Text style={{ fontSize: 10, fontWeight: 600, alignSelf: 'flex-end', color: COLORS.black }}>
					{date.getHours()}:{date.getMinutes()}
				</Text>
		</View>
		<SVG.Polygon style={styles.angle}/>
		</View>
	);
}

const styles = StyleSheet.create({
	angle: {
		position: 'absolute',
		bottom: 0,
		right: 0,
	},
	main: {
		marginVertical: 11,
		marginLeft: 40,
		marginRight: 10,
	},
	message: {
		flexDirection: "column",
		gap: 8,
		backgroundColor: COLORS.yellow,
		marginBottom: 8,
		padding: 16,
		borderRadius: 10,
	},
	icon: {
		width: 30,
		height: 30,
	},
});
