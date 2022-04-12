import React from "react";
import { Text, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants";

const HomeTitle = () => {
  return (
    <>
      <Text style={styles.paragraph}>
        Desarrolla todo
        {"\n"}
        <Text style={styles.highlight}>tu POTENCIAL {"\n"}</Text>
        dentro del equipo
        {"\n"}
        <Text style={styles.highlight}>ATOMIC</Text>
        LABS
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    ...FONTS.largeTitle,
    color: COLORS.white,
    textAlign: "justify",
  },
  highlight: {
    color: COLORS.secondary,
  },
});

export default HomeTitle;
