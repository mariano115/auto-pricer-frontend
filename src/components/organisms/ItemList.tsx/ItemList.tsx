import React from "react";
import { FlatList, GestureResponderEvent } from "react-native";
import ItemCard from "../../atoms/ItemCard/ItemCard";
//import { ItemListProps } from "../../../utils/Types";
import styles from "./styles";

interface ItemListProps<T> {
  list: T[];
  onPress: () => void;
  renderItemComponent: (item: T) => JSX.Element;
}

/* const ItemList: React.FunctionComponent<ItemListProps> = ({
  list,
  onPress,
}) => { */

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
