import React from "react";
import { FlatList } from "react-native";
import { ItemListProps } from "../../../utils/Interfaces";
import styles from "./styles";

const ItemList = <T,>({ list, renderItemComponent }: ItemListProps<T>) => {
  return (
    <FlatList
      style={styles.container}
      data={list}
      renderItem={({ item }) => renderItemComponent(item)}
    />
  );
};

export default ItemList;
