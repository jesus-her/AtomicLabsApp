import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { COLORS, FONTS, SIZES, images, icons } from "../../constants";
import FormTitle1 from "../sectionsTitles/FormTitle1";

const FormQuestion = ({ question, header, headerHighlight, icon }) => {
  return (
    <View style={{ marginBottom: SIZES.padding }}>
      {/* Question Counter */}
      <View style={styles.QuestionContainer}>
        <FormTitle1
          icon={icon}
          header={header}
          headerHighlight={headerHighlight}
        />
      </View>

      {/* Question */}
      <Text style={styles.paragraph}>{question}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
    alignSelf: "flex-start",
  },
  QuestionContainer: {
    width: "100%",
    marginVertical: SIZES.padding,
  },
  paragraph: {
    color: COLORS.white,
    ...FONTS.h3,
    textAlign: "left",
  },
});

export default FormQuestion;
