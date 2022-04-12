import React from "react";
import { Text, StatusBar, StyleSheet, Image, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const FormTitle1 = ({ header, headerHighlight, icon }) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.paragraph}>
        {header}
        {"\n"}
        <Text style={styles.highlight}>{headerHighlight}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  paragraph: {
    textTransform: "uppercase",
    ...FONTS.h1,
    color: COLORS.white,
    textAlign: "left",
  },
  highlight: {
    textTransform: "uppercase",
    color: COLORS.secondary,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginHorizontal: SIZES.padding,
  },
});

export default FormTitle1;
