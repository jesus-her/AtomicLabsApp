import { StatusBar, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: StatusBar.currentHeight,
  },
  image: {
    flex: 1,
    padding: SIZES.padding,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 160,
    height: 80,
    borderWidth: 1,
    borderColor: "red",
  },
  paragraph: {
    ...FONTS.largeTitle,
    color: COLORS.white,
    textAlign: "justify",
  },
  highlight: {
    color: COLORS.secondary,
  },
});

export default homeScreenStyles;
