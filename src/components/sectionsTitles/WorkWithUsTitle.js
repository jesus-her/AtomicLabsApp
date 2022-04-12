import React from "react";
import { Text, StatusBar, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants";

const WorkWithUsTitle = () => {
  return (
    <>
      <Text style={styles.paragraph}>
        ¡Te encantará
        {"\n"}
        <Text style={styles.highlight}>trabajar con {"\n"}</Text>
        <Text style={styles.highlight}>nosotros {"\n"}</Text>
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

export default WorkWithUsTitle;
