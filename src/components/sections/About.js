import React from "react";
import { Image, ImageBackground, StyleSheet } from "react-native";
import { COLORS, images, SIZES, icons } from "../../constants";
import AboutTitle from "../sectionsTitles/AboutTitle";
import { LinearGradient } from "expo-linear-gradient";

const About = ({ navigation }) => {
  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.primary2]}
      start={{ x: 1, y: 0.15 }}
      end={{ x: 1, y: 1 }}
      /* start={{ x: 0.5, y: 0.3 }}
      end={{ x: 1.5, y: 1 }}*/
      style={styles.background}
    >
      <AboutTitle />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  background: {
    width: SIZES.width,
    height: SIZES.height,
    padding: SIZES.padding,
    justifyContent: "space-between",
    alignItems: "center",
  },
  hero: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  logo: {
    width: 80,
    height: 40,
    resizeMode: "contain",
  },
});

export default About;
