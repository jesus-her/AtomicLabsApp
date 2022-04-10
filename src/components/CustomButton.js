import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const CustomButton = ({ label, onPress, icon, backgroundColor }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={styles.container}
      onPress={onPress}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          borderRadius: SIZES.radius,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: backgroundColor,
        }}
      >
        {icon !==
        <Image source={icon} resizeMode="contain" style={styles.icon} />}

        <Text style={styles.label}> {label} </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: SIZES.width / 2,
    height: 50,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: COLORS.white,
    marginRight: 10,
  },
  label: {
    ...FONTS.h3,
    color: COLORS.primary2,
    letterSpacing: 1,
  },
});

export default CustomButton;
