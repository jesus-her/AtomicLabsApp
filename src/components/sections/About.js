import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
import AboutTitle from "../sectionsTitles/AboutTitle";
import { LinearGradient } from "expo-linear-gradient";
import Onboarding from "../Onboarding/Onboarding";

const About = () => {
  return (
    <LinearGradient
      colors={[COLORS.primary, "#052241"]}
      start={{ x: 1, y: 0.15 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <AboutTitle />
      <Onboarding />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZES.width,
    height: SIZES.height,
    padding: SIZES.padding,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default About;
