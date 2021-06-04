import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

export default function BackButtonComponent(props) {
    const goBack = () => {
     props.navigation.goBack()   
    }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.BackContainer, { backgroundColor: props.circleColor }]}
      onPress={goBack}
    >
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
}
