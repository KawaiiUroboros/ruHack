import React from "react";
import { Text, View } from "react-native";
import styles, { DARK_GRAY, PRIMARY_COLOR } from "../assets/styles";
import { TabBarIconT } from "../types";
import {Ionicons} from "@expo/vector-icons";

const TabBarIcon = ({ focused, iconName, text }: TabBarIconT) => {
  const iconFocused = focused ? PRIMARY_COLOR : DARK_GRAY;

  return (
    <View style={styles.iconMenu}>
      <Ionicons name={iconName} size={16} color={iconFocused} />
      <Text style={[styles.tabButtonText, { color: iconFocused }]}>{text}</Text>
    </View>
  );
};

export default TabBarIcon;
