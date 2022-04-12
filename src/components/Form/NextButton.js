import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONTS, icons, SIZES } from "../../constants";
import { Image, StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

const NextButton = ({ currentQuestionIndex, onPress, isPrimary = true }) => {
  return (
    <LinearGradient
      colors={[
        isPrimary ? COLORS.secondary : COLORS.primary,
        isPrimary ? COLORS.secondary : COLORS.primary,
      ]}
      start={{ x: 0.1, y: 0.5 }}
      end={{ x: 1, y: 1 }}
      style={{
        borderRadius: 30,
        borderWidth: 1,
        borderColor: COLORS.primary,
        width: "100%",
        height: 40,
      }}
    >
      <View style={styles.shadow} />
      <RectButton style={styles.button} onPress={onPress}>
        <Text
          style={{
            textAlign: "center",
            ...FONTS.h2,
            color: isPrimary ? COLORS.white : COLORS.primary,
            marginRight: 12,
          }}
        >
          {currentQuestionIndex === 0 ? "Siguiente" : "Enviar"}
        </Text>
        <View style={{ position: "absolute", right: SIZES.padding }}>
          <Image
            source={
              currentQuestionIndex === 0 ? icons.rightArrow : icons.checkmark
            }
            resizeMode="contain"
            style={
              currentQuestionIndex === 0
                ? { width: 30, height: 30 }
                : { width: 20, height: 20, tintColor: COLORS.white }
            }
          />
        </View>
      </RectButton>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 30,
    alignItems: "center",
  },
  shadow: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(29,29,29,0.3)",
    zIndex: -2,
    borderRadius: 30,
    height: 45,
    width: "100%",
  },
  icon: {},
});

export default NextButton;
