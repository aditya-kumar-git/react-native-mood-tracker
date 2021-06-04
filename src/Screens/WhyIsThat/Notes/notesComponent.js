import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles";
export default function NotesComponent(props) {
  let { notesValue,changeNotesValue } = props;
  return (
    <View style={styles.NotesConstainer}>
      <Text style={styles.NotesText}>Notes:</Text>
      <View style={styles.TextBoxContainer}>
        <TextInput
          style={styles.TextBox}
          placeholder="Optional"
          multiline={true}
          value={notesValue}
          onChangeText={(data) => {
            changeNotesValue(data)
          }}
        />
      </View>
    </View>
  );
}
