import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

const FormInput = (props) => {
  const {
    labelText = "",
    placeholderText = "",
    onChangeText = null,
    value = null,
    icon,
    hidePassword,
    _changeIcon,
    icon2,
    hidePassword2,
    _changeIcon2,
    color,
    ...more
  } = props;
  return (
    <View style={{ width: "100%", marginBottom: 20 }}>
      <Text style={{ ...FONTS.h3, color: COLORS.gray20 }}>{labelText}</Text>
      <View
        style={{
          flexDirection: "row",
          position: "relative",
          alignItems: "center",
        }}
      >
        <TextInput
          {...props}
          style={{
            padding: 10,
            backgroundColor: COLORS.white,
            width: "100%",
            borderRadius: 5,
            marginTop: 10,
            ...FONTS.h4,
            fontWeight: "bold",
          }}
          placeholder={placeholderText}
          onChangeText={onChangeText}
          value={value}
          {...more}
        />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={_changeIcon ? _changeIcon : _changeIcon2}
        >
          <Image source={icon ? icon : icon2} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    width: 22,
    height: 22,
    position: "absolute",
    right: SIZES.base,
    top: SIZES.padding,
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    tintColor: COLORS.gray50,
  },
});

export default FormInput;
