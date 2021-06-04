import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  HeaderCurve: {
    backgroundColor: "rgba(219, 191, 98, 0.2)",
    height: Dimensions.get("screen").height / 3,
    paddingHorizontal: 20,
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
