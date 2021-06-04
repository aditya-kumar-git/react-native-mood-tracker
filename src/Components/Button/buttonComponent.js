import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function ButtonComponent(props) {
  const {
    dataText,
    dataColorText,
    dataColorButton,
    dataSend,
    navigation,
    disableButton = false,
    disabledDataColorButton,
    navigationData,
    dontNavigate,
    runThis,
  } = props;

  let navigate = () => {
    dontNavigate
      ? runThis()
      : navigation.navigate(dataSend, { sliderValue: navigationData });
  };
  return (
    <View style={styles.ButtonContainer}>
      <TouchableOpacity
        style={[
          styles.Button,
          {
            backgroundColor: !disableButton
              ? dataColorButton
              : disabledDataColorButton,
          },
        ]}
        activeOpacity={0.5}
        onPress={!disableButton ? navigate : null}
      >
        <Text style={[styles.ButtonText, { color: dataColorText }]}>
          {dataText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
