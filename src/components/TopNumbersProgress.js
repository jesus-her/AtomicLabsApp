import React from "react";
import { StyleSheet, View } from "react-native";
import { icons, SIZES } from "../constants";
import IconLabel from "./IconLabel";

const TopNumbersProgress = ({ currentQuestionIndex }) => {
  return (
    <>
      <View style={styles.container}>
        <IconLabel
          icon={
            currentQuestionIndex === 0 ? icons.numberOne : icons.numberOneCheck
          }
          containerStyle={{
            width: 30,
            height: 30,
          }}
          iconStyle={{
            width: "100%",
            height: "100%",
          }}
        />

        <IconLabel
          icon={
            currentQuestionIndex === 0 ? icons.numberTwoGray : icons.numberTwo
          }
          containerStyle={{
            width: 30,
            height: 30,
          }}
          iconStyle={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: SIZES.radius,
  },
});

export default TopNumbersProgress;
