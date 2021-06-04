import { StyleSheet } from "react-native";
export default StyleSheet.create({
  MoodBlockContainer: {
    borderTopWidth: 2,
    borderColor: "rgba(239, 239, 239, 1)",
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  TagLists: {
    flexDirection: "row",
  },
  MoodBlockText: {
    marginHorizontal: 2,
  },
  MoodBlockContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  Faces: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "rgba(251, 244, 227, 1)",
    justifyContent: "center",
    alignItems: "center",
  },
  Dates: {
    marginTop: 5,
    color: "grey",
    fontSize: 12,
  },
  FaceDateContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});
