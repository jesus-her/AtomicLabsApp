import React from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../constants";

import SocialMedia from "./SocialMedia";
import IconLabel from "./IconLabel";
import CustomButton from "./CustomButton";

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
      <View style={styles.footer}>
        <IconLabel
          icon={icons.love}
          iconStyle={{ width: 25, height: 25 }}
          label="Hecho con amor."
        />
        <CustomButton
          onPress={() => Linking.openURL("https://jesushernandez.netlify.app/")}
          label="¡Más acerca de mí!"
        />
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
    height: "45%",
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
