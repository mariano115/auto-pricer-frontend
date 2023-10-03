import React from "react";
//import "./styles.scss";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  GestureResponderEvent,
} from "react-native";
import TouchableCard from "../../molecules/TouchableCard/TouchableCard";

export type CardProps = {
  list: { id: number; image: string; title: string }[];
  onPress: (event: GestureResponderEvent) => void;
};

const CardList: React.FunctionComponent<CardProps> = ({ list, onPress }) => {
  return (
    <FlatList
      style={styles.container}
      data={list}
      renderItem={({ item }) => (
        <TouchableCard key={item.id} image={item.image} title={item.title} onPress={onPress}/>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default CardList;
