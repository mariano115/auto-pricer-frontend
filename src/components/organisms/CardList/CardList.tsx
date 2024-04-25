import React from "react";
import { FlatList } from "react-native";
import TouchableCard from "../../molecules/TouchableCard/TouchableCard";
import { CardListProps } from "../../../utils/Types";
import styles from "./styles";

const CardList: React.FunctionComponent<CardListProps> = ({
  list,
  onPress,
}) => {
  return (
    <FlatList
      style={styles.container}
      data={list}
      renderItem={({ item }) => (
        <TouchableCard
          key={item.id}
          image={item.image}
          title={item.title}
          onPress={onPress}
        />
      )}
    />
  );
};

export default CardList;
