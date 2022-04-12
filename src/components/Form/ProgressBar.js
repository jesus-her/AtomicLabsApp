import React from "react";
import { Animated, View } from "react-native";
import { COLORS, SIZES } from "../../constants";

const ProgressBar = ({ progressAnim }) => {
  return (
    <View
      style={{
        width: "90%",
        height: 20,
        borderRadius: 20,
        backgroundColor: COLORS.white,
      }}
    >
      <Animated.View
        style={[
          {
            height: 20,
            borderRadius: 20,
            backgroundColor: COLORS.secondary,
          },
          {
            width: progressAnim,
          },
        ]}
      />
    </View>
  );
};

export default ProgressBar;
