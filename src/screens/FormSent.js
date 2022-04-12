import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from "react-native";
import { COLORS, images, SIZES, FONTS } from "../constants";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";

const FormSent = () => {
  const navigation = useNavigation();
  return (
    <ScrollView pagingEnabled={false} showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={images.background}
        style={styles.background}
        imageStyle={{ transform: [{ scaleX: -1 }] }}
        resizeMode="cover"
      >
        <View style={styles.QuestionContainer}>
          <Text style={styles.header}>
            Tus datos{"\n"} han sido
            <Text style={styles.highlight}> enviados{"\n"} con éxito</Text>
          </Text>
          <Text style={styles.paragraph}>
            En breve recibirás un correo de confirmación por parte del equipo de
            AtomicLabs.{"\n"} {"\n"} Recuerda revisar tu bandeja de SPAM {"\n"}
            ¡Esperamos verte pronto!
          </Text>
        </View>
        <Image source={images.working} style={styles.hero} />
        <CustomButton
          onPress={() => navigation.navigate("Home")}
          label="¡Volver al inicio!"
          backgroundColor={COLORS.white}
        />
      </ImageBackground>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  background: {
    width: SIZES.width,

    padding: SIZES.padding,
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: COLORS.primary,
  },
  hero: {
    width: "100%",
    height: 500,
    resizeMode: "contain",
  },
  header: {
    textTransform: "uppercase",
    ...FONTS.h1,
    color: COLORS.white,
    textAlign: "center",
  },
  paragraph: {
    color: COLORS.white,
    ...FONTS.h3,
    fontWeight: "normal",
    textAlign: "left",
    letterSpacing: 0.5,
    marginTop: SIZES.padding,
  },
  highlight: {
    textTransform: "uppercase",
    color: COLORS.secondary,
  },
});

export default FormSent;
