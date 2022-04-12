import React from "react";
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";

import AtomicTeamTitle from "../sectionsTitles/AtomicTeamTitle";
import StackCarousel from "../StackCarousel";

const AtomicTeam = () => {
  return (
    <LinearGradient
      colors={[COLORS.primary, "#052241"]}
      start={{ x: 1, y: 0.15 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <AtomicTeamTitle />
      <StackCarousel />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZES.width,
    height: SIZES.height,
    paddingTop: SIZES.padding,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default AtomicTeam;
