import React, { useState } from "react";
import FormQuestion from "./FormQuestion";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, icons, images, SIZES } from "../../constants";
import FormInput from "./FormInput";
import NextButton from "./NextButton";
import Footer from "../Footer";
import QuestionTwo from "./QuestionTwo";

const QuestionOne = ({
  progress,
  currentQuestionIndex,
  setCurrentQuestionIndex,
}) => {
  const [show, setShow] = useState(true);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  //Set error messages
  const updateError = (error, stateUpdater) => {
    stateUpdater(error);
    setTimeout(() => {});
  };

  //Conditions an specific error messages
  const isValidForm = () => {
    //If name have 5 or more characters
    if (name.length < 5)
      return updateError(
        "El nombre deberá tener mínimo 5 caracteres",
        setError
      );
    //If last name have 5 or more characters
    if (lastName.length < 5)
      return updateError(
        "Tus apellidos deberán tener mínimo 5 caracteres",
        setError
      );
    return true;
  };
  const handleNext = () => {
    if (isValidForm()) {
      setShow(!show);
      setError("");
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      /*console.log(currentQuestionIndex);*/
      Animated.timing(progress, {
        toValue: currentQuestionIndex + 1,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View style={!show ? styles.show : null}>
        <FormQuestion
          icon={icons.numberOne}
          header="Te queremos"
          headerHighlight="conocer"
          question="Queremos saber que eres tú, por favor ingresa los siguientes datos:"
        />
        {error ? (
          <Text style={{ color: "red", ...FONTS.h4, textAlign: "left" }}>
            {error}
          </Text>
        ) : null}
        <FormInput
          labelText="Nombre (s)"
          placeholderText="Ingresa tu nombre o nombres"
          icon={icons.locked}
          onChangeText={setName}
          value={name}
        />
        <FormInput
          labelText="Apellidos"
          placeholderText="Ingresa tus apellidos"
          icon={icons.locked}
          onChangeText={setLastName}
          value={lastName}
        />
        <View style={{ width: "100%", marginVertical: SIZES.base }}>
          <NextButton
            currentQuestionIndex={currentQuestionIndex}
            onPress={handleNext}
          />
        </View>
        <Image source={images.eating} style={styles.hero} />
      </View>

      {/*Then go to the Question Two*/}
      <QuestionTwo
        show={show}
        error={error}
        setError={setError}
        currentQuestionIndex={currentQuestionIndex}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  show: {
    display: "none",
  },
  hero: {
    width: "100%",
    height: "50%",
    borderRadius: 100,
    resizeMode: "contain",
  },
});

export default QuestionOne;
