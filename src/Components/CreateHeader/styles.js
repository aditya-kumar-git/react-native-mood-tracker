import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  HeaderCurveContainer: {
    height: Dimensions.get("screen").height / 4,
  },
  HeaderCurve: {
    backgroundColor: "rgba(219, 191, 98, 0.3)",
    height: "100%",
    paddingHorizontal: 20,
  },

  TextboxTriangle: {
    fontSize:24 ,
    color:"white",
    marginTop:-12,
    marginLeft:50,
    transform: [{ rotate: '-90deg'}]
  },
  HeaderContent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    position: "relative",
  },
  TextBox: {
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 12,
  },
  TextBoxText: {
    fontWeight: "500",
    fontSize: 16,
  },
});
