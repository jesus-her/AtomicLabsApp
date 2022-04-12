import React, { useState } from "react";
import FormQuestion from "./FormQuestion";
import { Image, StyleSheet, Text, ToastAndroid, View } from "react-native";
import { FONTS, icons, images } from "../../constants";
import FormInput from "./FormInput";
import NextButton from "./NextButton";
import { useNavigation } from "@react-navigation/native";
const QuestionTwo = ({ show, error, setError, currentQuestionIndex }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigation = useNavigation();

  //Set error messages
  const updateError = (error, stateUpdater) => {
    stateUpdater(error);
    setTimeout(() => {});
  };

  //Conditions an specific error messages
  const isValidForm = () => {
    //If name have 5 or more characters
    if (phoneNumber.length < 9)
      return updateError(
        "Tu número telefónico debe tener 10 dígitos",
        setError
      );

    return true;
  };
  const handleNext = () => {
    if (isValidForm()) {
      setError("");
      ToastAndroid.show("¡Datos enviados!", ToastAndroid.SHORT);
      /* console.log(currentQuestionIndex);*/
      navigation.navigate("FormSent");
    }
  };

  return (
    <>
      <View style={show ? styles.show : null}>
        <FormQuestion
          icon={icons.numberTwo}
          header="Valida tu"
          headerHighlight="celular"
          question="Necesitamos validar tu número para continuar. Ingresa tu número a 10 dígitos y te enviaremos un código SMS."
        />
        {error ? (
          <Text style={{ color: "red", ...FONTS.h4, textAlign: "left" }}>
            {error}
          </Text>
        ) : null}
        <FormInput
          keyboardType="numeric"
          labelText="Número de celular"
          icon={icons.locked}
          placeholderText=""
          onChangeText={setPhoneNumber}
          value={phoneNumber}
        />
        <NextButton onPress={handleNext} />
        <Image source={images.floating} style={styles.hero} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  show: {
    display: "none",
  },
  hero: {
    width: "100%",
    height: "50%",
    resizeMode: "cover",
  },
});

export default QuestionTwo;
