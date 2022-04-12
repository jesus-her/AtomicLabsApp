import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  Animated,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  SafeAreaView,
  Platform,
} from "react-native";
import { COLORS, images, SIZES } from "../constants";
import ProgressBar from "../components/Form/ProgressBar";
import QuestionOne from "../components/Form/QuestionOne";
import Footer from "../components/Footer";
import TopNumbersProgress from "../components/TopNumbersProgress";

const Form = () => {
  const behavior = Platform.OS === "ios" ? "position" : "";
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["50%", "100%"],
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1, alignItems: "center" }}
        keyboardVerticalOffset={100}
        behavior={behavior}
      >
        <ScrollView>
          <ImageBackground
            source={images.background}
            style={styles.background}
            imageStyle={{ transform: [{ scaleX: -1 }] }}
            resizeMode="cover"
          >
            {/*Logo*/}
            <Image source={images.logo} style={styles.logo} />
            {/*Numbers*/}
            <TopNumbersProgress currentQuestionIndex={currentQuestionIndex} />
            {/* ProgressBar */}
            <ProgressBar progressAnim={progressAnim} />

            <QuestionOne
              currentQuestionIndex={currentQuestionIndex}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
              progress={progress}
            />
          </ImageBackground>

          <Footer />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    width: SIZES.width,
    height: SIZES.height + 350,
    padding: SIZES.padding,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  logo: {
    width: 80,
    height: 40,
    resizeMode: "contain",
  },
});

export default Form;
