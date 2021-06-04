import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    paddingHorizontal: 20,
  },
  HeaderContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  HeaderText: {
    fontWeight: "500",
    fontSize: 16,
    color: "rgba(23, 23, 23, 1)",
  },
  DateText: {
    fontWeight: "200",
    fontSize: 16,
    color: "rgba(23, 23, 23, 1)",
    marginTop: 5,
  },
  BackButtonContainer: {
    position: "absolute",
    left: 0,
  },

  // Tags

  TagsContainer: {
    marginTop: 20,
  },
  SmallHeaderText: {
    fontSize: 16,
    color: "grey",
  },
  TagsItemContainer: {
    backgroundColor: "rgba(23, 23, 23, 1)",
    marginHorizontal: 5,
    padding: 12,
    borderRadius: 10,
  },
  TagsItemText: {
    fontWeight: "500",
    fontSize: 16,
    color: "white",
  },
  FlatListContainer: {
    justifyContent: "center",
    alignItems: "center",
    minWidth: "100%",
    marginVertical: 20,
  },

  // NOTES
  NotesContainer: {
    marginVertical: 10,
  },
  NotesContentContainer: {
    backgroundColor: "rgba(251, 244, 227, 1)",
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  NotesContent: {
    lineHeight: 22,
    color: "rgba(23, 23, 23, 1)",
    fontWeight: "500",
  },
});
