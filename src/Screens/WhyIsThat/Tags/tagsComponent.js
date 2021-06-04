import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
export default function TagsComponent(props) {
  const { firstHalf, secondHalf, triggerChange } = props;
  const tagsItem = (data) => {
    const ele = data.item;
    return (
      <TouchableOpacity
        onPress={() => {
          triggerChange(ele);
        }}
        activeOpacity={0.5}
        style={[
          styles.TagsItemContainer,
          {
            backgroundColor: ele.selected
              ? "rgba(23, 23, 23, 1)"
              : "rgba(251, 244, 227, 1)",
          },
        ]}
      >
        <Text
          style={[
            styles.TagsItemText,
            {
              color: ele.selected ? "white" : "rgba(23, 23, 23, 1)",
            },
          ]}
        >
          {ele.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.TagsContainer}>
      <Text style={styles.selTagText}>Select tags:</Text>
      <FlatList
        horizontal
        data={firstHalf}
        keyExtractor={(data) => {
          return data.id + data.name;
        }}
        renderItem={tagsItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.FlatListContainer}
      />
      <FlatList
        horizontal
        data={secondHalf}
        keyExtractor={(data) => {
          return data.id + data.name;
        }}
        renderItem={tagsItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.FlatListContainer}
      />
    </View>
  );
}
