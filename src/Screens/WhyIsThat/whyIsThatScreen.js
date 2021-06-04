import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ActivityIndicator } from "react-native";
import styles from "./styles";
import MascotImage from "Images/mascotImage";
import { tagsList } from "./tagElements";
import TagsComponent from "./Tags";
import ButtonComponent from "Components/Button";
import NotesComponent from "./Notes";
import firebase from "../../FireBase/fireBase";
import Routes from "Routes";
import moment from "moment";

export default function WhyIsThatScreen(props) {
  let dataBaseData = firebase.firestore().collection("moods");

  const [tags, settags] = useState([]);
  const [notesValue, setnotesValue] = useState("");
  const [sliderValue, setsliderValue] = useState(0);
  const [firstHalf, setfirstHalf] = useState([]);
  const [secondHalf, setsecondHalf] = useState([]);
  const [loader, setloader] = useState(false);

  useEffect(() => {
    settags(tagsList);
    setsliderValue(props.route.params.sliderValue);
  }, []);

  useEffect(() => {
    const half = Math.ceil(tags.length / 2);
    if (tags.length % 2 === 0) {
      setfirstHalf(tags.slice(0, half));
      setsecondHalf(tags.slice(-half));
    } else {
      setfirstHalf(tags.slice(0, half - 1));
      setsecondHalf(tags.slice(-half));
    }
  }, [tags]);

  const sendDataToDataBase = async () => {
    setloader(true)
    let positiveTags = tags.filter((data) => data.selected);
    let tagArray = positiveTags.map((data) => data.name);
    let date = moment(new Date()).format("DD/MM");
    let data = {
      date: date,
      notes: notesValue,
      slider: sliderValue,
      tags: tagArray,
    };
    try {
      var response = await dataBaseData.doc().set(data);
      if (response == undefined) {
        setloader(false)
        props.navigation.navigate(Routes.Home);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const triggerChange = (data) => {
    let change = tags.map((ele) => {
      if (ele.id === data.id) {
        return { ...ele, selected: !ele.selected };
      } else {
        return ele;
      }
    });
    settags(change);
  };

  const notesChange = (data) => {
    setnotesValue(data);
  };

  return (
    <View style={styles.Conainer}>
      <SafeAreaView style={{ flexGrow: 1 }}>
        {/* Header */}

        <View style={styles.Header}>
          <View style={styles.MascotContainer}>
            <MascotImage />
          </View>
          <View style={styles.MascotTextContainer}>
            <Text style={styles.MascotText}>Why is that?</Text>
          </View>
        </View>

        {loader ? (
          <View style={styles.LoaderContainer}>
            <ActivityIndicator size="large" color="#000" />
          </View>
        ) : (
          <>
            {/* Tags */}
            <TagsComponent
              styles={styles}
              firstHalf={firstHalf}
              secondHalf={secondHalf}
              triggerChange={triggerChange}
            />

            {/* Notes */}

            <View style={{ flexGrow: 1 }}>
              <NotesComponent
                styles={styles}
                notesValue={notesValue}
                changeNotesValue={notesChange}
              />
            </View>

            <ButtonComponent
              dataText="Save"
              dataColorButton="rgba(99, 166, 220, 1)"
              dataColorText="#fff"
              navigation={props.navigation}
              dataSend={Routes.WhyIsThat}
              dontNavigate
              runThis={sendDataToDataBase}
            />
          </>
        )}
      </SafeAreaView>
    </View>
  );
}