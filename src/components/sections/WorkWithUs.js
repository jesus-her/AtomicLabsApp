import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { COLORS, images, SIZES } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";
import WorkWithUsTitle from "../sectionsTitles/WorkWithUsTitle";
import CustomButton from "../CustomButton";
import TimeLine from "../TimeLine";
import { useNavigation } from "@react-navigation/native";

const WorkWithUs = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={[COLORS.primary, "#052241"]}
      start={{ x: 1, y: 0.15 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <WorkWithUsTitle />
      <Image source={images.atomicTeam} style={styles.image} />
      <View style={styles.timeline}>
        <TimeLine />
      </View>
      <CustomButton
        onPress={() => navigation.navigate("Form")}
        label="¡Quiero ser parte!"
        backgroundColor={COLORS.white}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZES.width,
    height: SIZES.height,
    padding: SIZES.padding,
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  timeline: {
    width: "100%",
    height: SIZES.height / 2.5,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

export default WorkWithUs;
