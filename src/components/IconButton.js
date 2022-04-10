import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";
import { COLORS, FONTS, SIZES, icons } from "../constants";

const IconButton = ({ label, onPress, icon }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={styles.container}
    >
      <Image source={icon} resizeMode="contain" style={styles.icon} />
      <Text style={styles.label}> {label} </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
  },
  label: {
    ...FONTS.h3,
    color: COLORS.white,
    letterSpacing: 1,
  },
});

export default IconButton;
