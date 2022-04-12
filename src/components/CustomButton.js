import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const CustomButton = ({
  label,
  onPress,
  icon,
  backgroundColor,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={{
        width: SIZES.width / 2,
        height: SIZES.height / 16,
        ...containerStyle,
      }}
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
