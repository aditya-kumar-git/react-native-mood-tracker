import BackButtonComponent from "Components/BackButton";
import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { tagsList } from "Screens/WhyIsThat/tagElements";
import styles from "./styles";
export default function ShowMoodScreen(props) {
const [moodData, setmoodData] = useState([])
  const [tags, settags] = useState([]);
  useEffect(() => {
    setmoodData(props.route.params.data)
    settags(tagsList);
  }, []);

  const tagsItem = (data) => {
    const ele = data.item;
    return (
      <View style={styles.TagsItemContainer}>
        <Text style={styles.TagsItemText}>{ele}</Text>
      </View>
    );
  };


  return (
    <View style={styles.Container}>
      <SafeAreaView>
        {/* HEADER */}
        <View style={styles.HeaderContainer}>
          <Text style={styles.HeaderText}>Mood</Text>
          <Text style={styles.DateText}>{moodData.date}</Text>
          <View style={styles.BackButtonContainer}>
            <BackButtonComponent
              circleColor="rgba(251, 244, 227, 1)"
              navigation={props.navigation}
            />
          </View>
        </View>

        {/* TAGS */}

        <View style={styles.TagsContainer}>
          <Text style={styles.SmallHeaderText}>Tags:</Text>
          <FlatList
            horizontal
            data={moodData.tags}
            keyExtractor={(data,index) => {
              return data + index;
            }}
            renderItem={tagsItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.FlatListContainer}
          />
        </View>

        {/* NOTES */}
        <View style={styles.NotesContainer}>
          <Text style={styles.SmallHeaderText}>Notes:</Text>
          <View style={styles.NotesContentContainer}>
            <Text
            style={styles.NotesContent}
            >
             {moodData.notes}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
