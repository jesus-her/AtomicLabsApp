import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES, icons } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";
import IconLabel from "../../components/IconLabel";
import LineDivider from "../LineDivider";

export default OnboardingItem = ({ item }) => {
  return (
    <LinearGradient
      colors={[COLORS.secondary, "#ED6016"]}
      start={{ x: 1, y: 0.15 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View
        style={{
          flex: 0.5,
          width: "50%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={item.image} style={styles.image} />
      </View>

      <LineDivider />

      <View
        style={{
          flex: 0.75,
          width: "100%",
          paddingHorizontal: SIZES.padding,
          justifyContent: "flex-start",
        }}
      >
        <Text style={styles.title}>{item.title}</Text>
        {item.descriptions.map((item, index) => (
          <IconLabel
            key={index}
            icon={icons.checkmark}
            label={item.line}
            containerStyle={{
              marginVertical: SIZES.base,
            }}
            iconStyle={{
              width: 15,
              height: 15,
              tintColor: COLORS.white,
              resizeMode: "contain",
            }}
            labelStyle={styles.description}
          />
        ))}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.padding,
    width: SIZES.width - SIZES.padding * 2,
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.radius,
  },
  image: {
    width: "100%",
    resizeMode: "contain",
    justifyContent: "center",
  },
  title: {
    ...FONTS.h1,
    textAlign: "center",
    color: COLORS.white,
    marginVertical: SIZES.base,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  description: {
    marginLeft: 8,
    color: COLORS.gray10,
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 22,
  },
});
