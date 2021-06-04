import React from "react";
import { Dimensions } from "react-native";

import Svg, { Path } from "react-native-svg";

export default function WavyBackground() {
  return (
    <Svg
      width={Dimensions.get("window").width}
      height={80}
      preserveAspectRatio="xMinYMin slice"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <Path
        fill="rgba(219, 191, 98, 0.5)"
        fill-opacity="1"
        d="M0,160L80,133.3C160,107,320,53,480,64C640,75,800,149,960,181.3C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      ></Path>
    </Svg>
  );
}
