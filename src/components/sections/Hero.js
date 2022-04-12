import React from "react";
import { Image, ImageBackground, StyleSheet } from "react-native";
import { COLORS, images, SIZES, icons } from "../../constants";
import HomeTitle from "../../components/sectionsTitles/HomeTitle";
import CustomButton from "../../components/CustomButton";
import IconButton from "../../components/IconButton";
import { useNavigation } from "@react-navigation/native";

const Hero = ({ onPressTouch }) => {
  const navigation = useNavigation();
  return (
    <>
      <ImageBackground
        source={images.verticalBackground}
        style={styles.background}
        resizeMode="cover"
      >
        <Image source={images.logo} style={styles.logo} />
        <HomeTitle />
        <IconButton
          onPress={onPressTouch}
          icon={icons.downArrow}
          label="Quiero saber más"
        />
        <Image source={images.greetings} style={styles.hero} />
        <CustomButton
          onPress={() => navigation.navigate("Form")}
          label="¡Quiero ser parte!"
          backgroundColor={COLORS.white}
        />
      </ImageBackground>
    </>
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

    backgroundColor: COLORS.primary,
  },
  hero: {
    width: "100%",
    height: SIZES.height / 3,
    resizeMode: "contain",
  },
  logo: {
    width: 80,
    height: 40,
    resizeMode: "contain",
  },
});

export default Hero;
