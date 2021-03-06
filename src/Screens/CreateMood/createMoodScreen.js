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
    if (data > 30 && data < 330) {
      setsliderValue(data);
    }
  };
  return (
    <View style={styles.Conainer}>
      <CreateHeader navigation={props.navigation} />
      <View style={styles.MascotConainer}>
        <MascotImage
          shirtFill={
            sliderValue === 180
              ? "#63A6DC"
              : sliderValue > 180
              ? "rgba(75, 166, 149, 1)"
              : "rgba(247, 187, 181, 1)"
          }
        />
      </View>
      <View style={styles.sliderContainer}>
        <SliderComponent value={sliderValue} onValueChange={cangeSliderValue} />
      </View>
      <SafeAreaView>
        <ButtonComponent
          dataText="Next"
          dataColorButton="rgba(99, 166, 220, 1)"
          disabledDataColorButton="rgba(99, 166, 220, 0.3)"
          dataColorText="#fff"
          navigation={props.navigation}
          navigationData={sliderValue}
          dataSend={Routes.WhyIsThat}
          disableButton={sliderValue === 180 ? true : false}
        />
      </SafeAreaView>
    </View>
  );
}
