import React from "react";
import { Text, StatusBar, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants";

const AtomicTeamTitle = () => {
  return (
    <>
      <Text style={styles.paragraph}>
        Nuestro
        <Text style={styles.highlight}> equipo</Text>
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    textTransform: "uppercase",
    ...FONTS.h1,
    color: COLORS.white,
    textAlign: "justify",
  },
  highlight: {
    textTransform: "uppercase",
    color: COLORS.secondary,
  },
});

export default AtomicTeamTitle;
