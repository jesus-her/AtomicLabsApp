import React, { useState, useRef } from "react";
import { View, Text, Image, FlatList, Animated, StatusBar } from "react-native";
import slides from "./slides";
import { useNavigation } from "@react-navigation/native";
import OnboardingItem from "./OnboardingItem";
import { COLORS, SIZES } from "../../constants";
import Paginator from "./Paginator";

export default Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <View
      style={{
        width: SIZES.width,
        height: SIZES.height - SIZES.padding * 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.transparent,
        paddingVertical: SIZES.padding,
      }}
    >
      <View style={{ flex: 0.9 }}>
        <FlatList
          data={slides}
          horizontal
          pagingEnabled={true}
          bounces={false}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={32}
          ref={slidesRef}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          renderItem={({ item }) => <OnboardingItem item={item} />}
        />
      </View>
      <View style={{ flex: 0.1, justifyContent: "center" }}>
        <Paginator data={slides} scrollX={scrollX} />
      </View>
    </View>
  );
};
