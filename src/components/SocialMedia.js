import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import { COLORS, images, SIZES, icons, FONTS } from "../constants";
import IconLabel from "./IconLabel";

const SocialMedia = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        {/*Linkedin*/}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() =>
            Linking.openURL("https://www.linkedin.com/company/atomic-mexico/")
          }
        >
          <IconLabel
            icon={icons.linkedin}
            containerStyle={{
              width: 25,
              height: 25,
            }}
            iconStyle={{
              width: "100%",
              height: "100%",
            }}
          />
        </TouchableOpacity>

        {/*Twitter*/}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => Linking.openURL("https://twitter.com/atomicmexico")}
        >
          <IconLabel
            icon={icons.twitter}
            containerStyle={{
              width: 25,
              height: 25,
            }}
            iconStyle={{
              width: "100%",
              height: "100%",
            }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZES.width / 3,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default SocialMedia;
