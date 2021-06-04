import CreateHeader from "Components/CreateHeader/createHeaderComponent";
import React, { useState } from "react";
import { View, SafeAreaView, Text } from "react-native";
import styles from "./styles";
import MascotImage from "Images/mascotImage";
import ButtonComponent from "Components/Button";
import SliderComponent from "Components/Slider";

export default function CreateMoodScreen(props) {
  const [sliderValue, setsliderValue] = useState(180);

  let cangeSliderValue = (data) => {
    setsliderValue(data);
  };
  return (
    <View style={styles.Conainer}>
      <CreateHeader navigation={props.navigation} />
      <View style={styles.MascotConainer}>
        <MascotImage />
      </View>
      <View style={styles.sliderContainer}>
        <SliderComponent value={sliderValue} onValueChange={cangeSliderValue} />
      </View>
      <SafeAreaView>
        <Text>{sliderValue}</Text>
        <ButtonComponent
          dataText="Next"
          dataColorButton="rgba(99, 166, 220, 1)"
          disabledDataColorButton="rgba(99, 166, 220, 0.3)"
          dataColorText="#fff"
          navigation={props.navigation}
          navigationData={sliderValue}
          dataSend={Routes.WhyIsThat}
          disableButton={sliderValue === 0 ? true : false}
        />
      </SafeAreaView>
    </View>
  );
}
