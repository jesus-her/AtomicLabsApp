import React from "react";
import { View } from "react-native";
import { COLORS, SIZES } from "../constants";

const LineDivider = ({ lineStyle }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "50%",
        alignSelf: "center",
        alignItems: "center",

        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: "30%",
          height: 3,
          backgroundColor: COLORS.white,
          borderRadius: 3,
          ...lineStyle,
        }}
      />
      <View
        style={{
          width: 12,
          height: 3,
          marginHorizontal: SIZES.base,
          backgroundColor: COLORS.white,
          borderRadius: 3,
          ...lineStyle,
        }}
      />
      <View
        style={{
          width: "30%",
          height: 3,
          backgroundColor: COLORS.white,
          borderRadius: 3,
          ...lineStyle,
        }}
      />
    </View>
  );
};

export default LineDivider;
