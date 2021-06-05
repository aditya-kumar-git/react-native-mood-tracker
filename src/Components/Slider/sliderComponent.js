import React, { FC, useState, useRef, useCallback } from "react";
import { PanResponder, Dimensions, View, StyleSheet } from "react-native";
import Svg, { Path, Circle, G, Text } from "react-native-svg";
import Happy from "Images/happy";
import Sad from "Images/sad";
import Neutral from "Images/neutral";

const CircularSlider = ({
  btnRadius = 35,
  dialRadius = 130,
  dialWidth = 25,
  textColor = "#000",
  fillColor = "none",
  strokeColor = "rgba(251, 244, 227, 1)",
  strokeWidth = 25,
  textSize = 25,
  value = 180,
  min = 0,
  max = 359,
  xCenter = Dimensions.get("window").width / 2,
  yCenter = Dimensions.get("window").height / 2,
  onValueChange = (x) => x,
}) => {
  let angle = value;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (e, gs) => true,
      onStartShouldSetPanResponderCapture: (e, gs) => true,
      onMoveShouldSetPanResponder: (e, gs) => true,
      onMoveShouldSetPanResponderCapture: (e, gs) => true,
      onPanResponderMove: (e, gs) => {
        let xOrigin = xCenter - (dialRadius + btnRadius);
        let yOrigin = yCenter - (dialRadius + btnRadius);
        let a = cartesianToPolar(gs.moveX - xOrigin, gs.moveY - yOrigin);

        if (a <= min) {
          onValueChange(min);
        } else if (a >= max) {
          onValueChange(max);
        } else {
          onValueChange(a);
        }
      },
    })
  ).current;

  const polarToCartesian = useCallback(
    (angle) => {
      let r = dialRadius;
      let hC = dialRadius + btnRadius;
      let a = ((angle - 90) * Math.PI) / 180.0;

      let x = hC + r * Math.cos(a);
      let y = hC + r * Math.sin(a);
      return { x, y };
    },
    [dialRadius, btnRadius]
  );

  const cartesianToPolar = useCallback(
    (x, y) => {
      let hC = dialRadius + btnRadius;

      if (x === 0) {
        return y > hC ? 0 : 180;
      } else if (y === 0) {
        return x > hC ? 90 : 270;
      } else {
        return (
          Math.round((Math.atan((y - hC) / (x - hC)) * 180) / Math.PI) +
          (x > hC ? 90 : 270)
        );
      }
    },
    [dialRadius, btnRadius]
  );

  const width = (dialRadius + btnRadius + 2) * 2;
  const bR = btnRadius;
  const dR = dialRadius;
  const startCoord = polarToCartesian(180);
  var endCoord = polarToCartesian(angle);

  const RightOne = () => {
    return (
      <>
        <Path
          stroke={"black"}
          strokeLinecap="round"
          strokeWidth={dialWidth + 4}
          fill="none"
          d={`M${startCoord.x} ${
            startCoord.y
          } A ${dR} ${dR} 0 0 0 ${231.9} ${53.5}`}
        />
        <Path
          stroke={strokeColor}
          strokeLinecap="round"
          strokeWidth={dialWidth}
          fill="none"
          d={`M${startCoord.x} ${
            startCoord.y
          } A ${dR} ${dR} 0 0 0 ${231.9} ${53.5}`}
        />
      </>
    );
  };
  const LeftOne = () => {
    return (
      <>
        <Path
          stroke={"black"}
          strokeWidth={dialWidth + 4}
          strokeLinecap="round"
          fill="none"
          d={`M${startCoord.x} ${
            startCoord.y
          } A ${dR} ${dR} 0 0 1 ${88.5} ${59.8}`}
        />
        <Path
          stroke={strokeColor}
          strokeWidth={dialWidth}
          strokeLinecap="round"
          fill="none"
          d={`M${startCoord.x} ${
            startCoord.y
          } A ${dR} ${dR} 0 0 1 ${88.5} ${59.8}`}
        />
      </>
    );
  };

  return (
    <Svg width={width} height={width}>
      <View style={styles.svgContainer}>
        <View style={styles.smileContainer}>
          {angle === 180 ? <Neutral /> : angle < 180 ? <Sad /> : <Happy />}
        </View>
      </View>

      {angle > 180 ? (
        <>
          <LeftOne />
          <RightOne />
        </>
      ) : (
        <>
          <RightOne />
          <LeftOne />
        </>
      )}

      <Path
        stroke={
          angle > 180 ? "rgba(75, 166, 149, 1)" : "rgba(247, 187, 181, 1)"
        }
        strokeWidth={dialWidth}
        fill="none"
        d={`M${startCoord.x} ${startCoord.y} A ${dR} ${dR} 0 ${0} 
        ${angle > 180 ? 1 : 0} ${endCoord.x} ${endCoord.y}`}
      />
      <G x={endCoord.x - bR} y={endCoord.y - bR}>
        <Circle r={bR + 2} cx={bR} cy={bR} fill="#000" />
        <Circle
          r={bR}
          cx={bR}
          cy={bR}
          fill={
            angle === 180
              ? "#63A6DC"
              : angle > 180
              ? "rgba(75, 166, 149, 1)"
              : "rgba(247, 187, 181, 1)"
          }
          {...panResponder.panHandlers}
        />
        <Text
          x={bR - 17}
          y={bR + 5}
          fontSize={textSize}
          fill={textColor}
          fontWeight="bold"
          // textAnchor="middle"
        >
          {"< >"}
        </Text>
      </G>
    </Svg>
  );
};

const styles = StyleSheet.create({
  svgContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 340,
    width: 340,
  },
  smileContainer: {
    backgroundColor: "rgba(251, 244, 227, 1)",
    height: 100,
    width: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#000",
  },
});

export default React.memo(CircularSlider);
