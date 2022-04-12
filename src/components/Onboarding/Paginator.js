import React from "react";
import { View, StyleSheet, Animated, useWindowDimensions } from "react-native";
import { COLORS } from "../../constants";

export default Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWith = scrollX.interpolate({
          inputRange,
          outputRange: [15, 30, 15],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [1, 1, 1],
          extrapolate: "clamp",
        });
        const bgColor = scrollX.interpolate({
          inputRange,
          outputRange: [COLORS.white, COLORS.secondary, COLORS.white],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[
              styles.dot,
              { width: dotWith, opacity, backgroundColor: bgColor },
            ]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 15,
    borderRadius: 10,

    marginHorizontal: 8,
  },
});
