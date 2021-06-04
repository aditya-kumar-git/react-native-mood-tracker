import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";
import ButtonComponent from "Components/Button";
import Routes from "Routes";
import MoodBlockComponent from "Screens/Home/MoodBlock";
import { FlatList } from "react-native-gesture-handler";
import firebase from "../../FireBase/fireBase";

export default function HomeScreen(props) {
  let dataBaseData = firebase.firestore().collection("moods");
  const [records, setrecords] = useState([]);
  const [loader, setloader] = useState(false);

  const callData = async () => {
    setloader(true);
    dataBaseData.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setrecords(items);
      setloader(false);
    });
  };
  useEffect(() => {
    callData();
  }, []);

  const moodList = (data) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate(Routes.ShowMood, { data: data.item });
        }}
        activeOpacity={0.5}
      >
        <MoodBlockComponent data={data.item} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.Container}>
      <SafeAreaView style={{ flexGrow: 1 }}>
        <ButtonComponent
          dataText="+ Add a Record"
          dataColorButton="#FFE687"
          dataColorText="#000"
          navigation={props.navigation}
          dataSend={Routes.CreateMood}
          disableButton={false}
        />

        {loader ? (
          <View style={styles.LoaderContainer}>
            <ActivityIndicator size="large" color="#000" />
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={records}
              keyExtractor={(data, index) => {
                return data.tags[0] + index;
              }}
              renderItem={moodList}
            />
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}
