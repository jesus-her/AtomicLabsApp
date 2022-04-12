import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES, FONTS } from "../constants";

import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <Text style={styles.text}>
          © 2020 AtomicLabs. Todos los derechos reservados.{"\n"}
          <Text style={{ textDecorationLine: "underline" }}>
            Aviso de privacidad.
          </Text>
        </Text>
        <SocialMedia />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZES.width,
    height: SIZES.height / 2,
    padding: SIZES.padding,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.black,
  },
  footer: {
    width: "100%",
    height: "50%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    ...FONTS.body5,
    color: COLORS.white,
    textAlign: "center",
    letterSpacing: 0.5,
  },
});

export default Footer;
