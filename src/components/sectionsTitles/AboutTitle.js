import React from "react";
import { Text, StatusBar, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants";

console.log(StatusBar.currentHeight);

const HomeTitle = () => {
  return (
    <>
      <Text style={styles.paragraph}>
        Somos el brazo
        {"\n"}
        derecho
        <Text style={styles.highlight}> de la {"\n"}</Text>
        <Text style={styles.highlight}>tecnología</Text>
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

export default HomeTitle;
