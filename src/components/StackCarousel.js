import * as React from "react";
import {
  FlatList,
  Dimensions,
  Animated,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";

const { width } = Dimensions.get("screen");
import { FontAwesome5 } from "@expo/vector-icons";
import {
  FlingGestureHandler,
  Directions,
  State,
} from "react-native-gesture-handler";
import { COLORS, FONTS, images, SIZES } from "../constants";
import { LinearGradient } from "expo-linear-gradient";

const DATA = [
  {
    name: "Ramón Gómez",
    photo: require("../../assets/PaqueteAtomic/Group4034.png"),
    speciality: "Front-end developer",
  },
  {
    name: "Ximena Mejía",
    photo: require("../../assets/PaqueteAtomic/Group4034.png"),
    speciality: "UX Designer",
  },
  {
    name: "Jaime Domínguez",
    photo: require("../../assets/PaqueteAtomic/Group4034.png"),
    speciality: "Back-end developer",
  },
];

const OVERFLOW_HEIGHT = 70;
const SPACING = 0;
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 2;
const VISIBLE_ITEMS = 3;

const OverflowItems = ({ data, scrollXAnimated }) => {
  const inputRange = [-1, 0, 1];
  const translateY = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [OVERFLOW_HEIGHT, 0, -OVERFLOW_HEIGHT],
  });
  return (
    <View style={styles.overflowContainer}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        {data.map((item, index) => {
          return (
            <View key={index} style={styles.itemContainer}>
              <Text style={[styles.name]} numberOfLines={1}>
                {item.name}
              </Text>
              <View style={styles.itemContainerRow}>
                <Text style={[styles.speciality]}>
                  <FontAwesome5
                    name="medal"
                    size={16}
                    color={COLORS.secondary2}
                  />{" "}
                  {item.speciality}
                </Text>
              </View>
            </View>
          );
        })}
      </Animated.View>
    </View>
  );
};

export default function StackCarousel() {
  const [data, setData] = React.useState(DATA);
  const scrollXIndex = React.useRef(new Animated.Value(0)).current;
  const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
  const [index, setIndex] = React.useState(0);
  const setActiveIndex = React.useCallback((activeIndex) => {
    scrollXIndex.setValue(activeIndex);
    setIndex(activeIndex);
  });

  React.useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  });

  return (
    <FlingGestureHandler
      key="left"
      direction={Directions.LEFT}
      onHandlerStateChange={(ev) => {
        if (ev.nativeEvent.state === State.END) {
          if (index === data.length - 1) {
            return;
          }
          setActiveIndex(index + 1);
        }
      }}
    >
      <FlingGestureHandler
        key="right"
        direction={Directions.RIGHT}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (index === 0) {
              return;
            }
            setActiveIndex(index - 1);
          }
        }}
      >
        <LinearGradient
          colors={[COLORS.primary, COLORS.black]}
          start={{ x: 1, y: 0.1 }}
          end={{ x: 1, y: 1 }}
          style={{
            width: "100%",
            height: ITEM_HEIGHT,
            justifyContent: "center",
            backgroundColor: COLORS.secondary,
          }}
        >
          <OverflowItems data={data} scrollXAnimated={scrollXAnimated} />
          <FlatList
            data={data}
            keyExtractor={(_, index) => String(index)}
            horizontal
            inverted
            contentContainerStyle={{
              flex: 1,
              justifyContent: "center",
              padding: SPACING * 2,
              marginTop: 50,
            }}
            scrollEnabled={false}
            removeClippedSubviews={false}
            CellRendererComponent={({
              item,
              index,
              children,
              style,
              ...props
            }) => {
              const newStyle = [style, { zIndex: data.length - index }];
              return (
                <View style={newStyle} index={index} {...props}>
                  {children}
                </View>
              );
            }}
            renderItem={({ item, index }) => {
              const inputRange = [index - 1, index, index + 1];
              const translateX = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [50, 0, -100],
              });
              const scale = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [0.8, 1, 1.3],
              });
              const opacity = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
              });

              return (
                <>
                  <Animated.View
                    style={{
                      position: "absolute",
                      left: -ITEM_HEIGHT / 5,
                      opacity,
                      transform: [
                        {
                          translateX,
                        },
                        { scale },
                      ],
                    }}
                  >
                    <LinearGradient
                      colors={[COLORS.primary2, COLORS.primary]}
                      style={{
                        width: SIZES.width - SIZES.padding * 4,
                        height: SIZES.height / 2,
                        padding: SIZES.padding,
                        position: "relative",

                        borderRadius: SIZES.radius,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={item.photo}
                        style={{
                          width: 250,
                          height: 250,
                          borderRadius: 125,
                          resizeMode: "cover",
                          backgroundColor: COLORS.primary,
                        }}
                      />
                    </LinearGradient>
                  </Animated.View>
                </>
              );
            }}
          />
        </LinearGradient>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
}

const styles = StyleSheet.create({
  name: {
    ...FONTS.h1,
    textTransform: "uppercase",
    letterSpacing: -1,
    color: COLORS.white,
    marginLeft: SIZES.padding,
  },
  speciality: {
    ...FONTS.h4,
    color: COLORS.secondary2,
    marginLeft: SIZES.padding,
  },
  itemContainer: {
    height: OVERFLOW_HEIGHT,
    padding: SPACING * 2,
  },
  itemContainerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  overflowContainer: {
    height: OVERFLOW_HEIGHT,
    overflow: "hidden",

    marginTop: SIZES.padding,
  },
});
