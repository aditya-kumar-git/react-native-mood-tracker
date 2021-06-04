import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Conainer: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    paddingHorizontal: 10,
  },
  Header: {
    flexDirection: "row",
    alignItems: "center",
  },
  MascotText: {
    fontWeight: "500",
    fontSize: 16,
    color: "rgba(23, 23, 23, 1)",
  },
  MascotTextContainer: {
    backgroundColor: "rgba(251, 244, 227, 1)",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginLeft: 10,
  },
  MascotContainer: {
    height: 80,
    width: 80,
  },
  LoaderContainer:{
    justifyContent:'center',
    alignItems:'center',
    flex: 1
  }
});
