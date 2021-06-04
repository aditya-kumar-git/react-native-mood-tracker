import React from "react";
import { View, Text, TextInput, Keyboard } from "react-native";
import styles from "./styles";
export default function NotesComponent(props) {
  let { notesValue, changeNotesValue } = props;
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
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
            changeNotesValue(data);
          }}
          keyboardType="default"
          onSubmitEditing={dismissKeyboard}
        />
      </View>
    </View>
  );
}
