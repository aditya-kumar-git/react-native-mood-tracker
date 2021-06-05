import BackButtonComponent from "Components/BackButton";
import WavyBackground from "Images/wavy";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons'; 

export default function CreateHeader(props) {
  return (
    <>
    <View style={styles.HeaderCurveContainer}>
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
    </View>
        <WavyBackground />
      </>
  );
}
