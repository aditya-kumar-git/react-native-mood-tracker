import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import HappySmile from "Images/happySmile";
import SadSmile from "Images/sadSmile";

export default function MoodBlockComponent(props) {
  const tagLists = (data) => {
    const tagText = data.item;
    const index = data.index;
    return (
      <Text style={styles.MoodBlockText}>
        {index >= props.data.tags.length - 1 ? tagText : tagText + ","}
      </Text>
    );
  };

  let { data } = props;
  let limitedTags = data.tags.slice(0, 3);
  return (
    <View style={styles.MoodBlockContainer}>
      <View style={styles.MoodBlockContent}>
        <View style={styles.FaceDateContainer}>
          <View style={styles.Faces}>
            {data.happySad === "sad" ? <SadSmile /> : <HappySmile />}
          </View>
          <Text style={styles.Dates}>{data.date}</Text>
        </View>
        <FlatList
          data={limitedTags}
          keyExtractor={(data, index) => {
            return data + index;
          }}
          renderItem={tagLists}
          contentContainerStyle={styles.TagLists}
        />
      </View>
      <View>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </View>
    </View>
  );
}
