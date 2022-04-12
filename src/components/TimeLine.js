import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import StepIndicator from "react-native-step-indicator";
import { COLORS, FONTS, SIZES, icons } from "../constants";
import CustomButton from "./CustomButton";
import IconButton from "./IconButton";

const TimeLine = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const nextStep = () => {
    setCurrentPosition(currentPosition + 1);
    if (currentPosition >= 5) {
      console.log("current position ", currentPosition);
      setCurrentPosition(0);
    }
  };

  const labels = [
    "Contratación remota",
    "Entrevista con el área de RH",
    "Prueba práctica",
    "Entrevista técnica",
    "¡Atomicnauta!",
  ];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: COLORS.secondary,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: COLORS.secondary,
    stepStrokeUnFinishedColor: "#aaaaaa",
    separatorFinishedColor: COLORS.secondary,
    separatorUnFinishedColor: "#aaaaaa",
    stepIndicatorFinishedColor: COLORS.secondary,
    stepIndicatorUnFinishedColor: "#ffffff",
    stepIndicatorCurrentColor: "#ffffff",
    stepIndicatorLabelFontSize: 14,
    currentStepIndicatorLabelFontSize: 16,
    stepIndicatorLabelCurrentColor: COLORS.secondary,
    stepIndicatorLabelFinishedColor: "#ffffff",
    stepIndicatorLabelUnFinishedColor: "#aaaaaa",
    labelColor: COLORS.gray10,
    labelSize: 14,
    labelWeight: "bold",
    currentStepLabelColor: COLORS.secondary,
    labelAlign: "flex-start",
  };

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: "100%",
        }}
      >
        <StepIndicator
          customStyles={customStyles}
          currentPosition={currentPosition}
          labels={labels}
          direction="vertical"
        />
        <IconButton
          icon={currentPosition >= 5 ? icons.upArrow : icons.downArrow}
          label={currentPosition >= 5 ? "Beginning" : "Next Step"}
          onPress={nextStep}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZES.width - 50,
    height: SIZES.height - 170,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
});

export default TimeLine;
