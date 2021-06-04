import BackButtonComponent from "Components/BackButton";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from "./styles";
export default function CreateHeader(props) {
  return (
    <View style={styles.HeaderCurve}>
      <SafeAreaView>
        <BackButtonComponent
          circleColor="white"
          navigation={props.navigation}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.HeaderContent}>
        <View style={styles.TextBox}>
          <Text style={styles.TextBoxText}>
            Hello gorgeous, how{"\n"}are you feeling today?
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
