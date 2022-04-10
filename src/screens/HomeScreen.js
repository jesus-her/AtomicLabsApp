import React from "react";
import { StatusBar, ScrollView, StyleSheet } from "react-native";
import { COLORS, images, SIZES, icons } from "../constants";
import Home from "../components/sections/Home";
import About from "../components/sections/About";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={styles.container}
      pagingEnabled={true}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar backgroundColor={COLORS.primary} hidden={false} />
      <Home />
      <About />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZES.width,
    height: SIZES.height,
  },
});

export default HomeScreen;
