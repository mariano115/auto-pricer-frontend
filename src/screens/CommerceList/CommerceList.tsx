import React from "react";
import CardList from "../../components/organisms/CardList/CardList";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button } from "react-native";
import { RootStackParamList } from "../RootStackPrams";
import { useNavigation } from "@react-navigation/native";

const cardListArray = [
  {
    id: 0,
    image:
      "https://th.bing.com/th/id/OIP.hISrkmLE2i-i1_bzf1Ji9AHaE8?pid=ImgDet&rs=1",
    title: "Bellagamba",
  },
  {
    id: 1,
    image:
      "https://th.bing.com/th/id/OIP.hISrkmLE2i-i1_bzf1Ji9AHaE8?pid=ImgDet&rs=1",
    title: "Bellagamba",
  },
  {
    id: 2,
    image:
      "https://th.bing.com/th/id/OIP.hISrkmLE2i-i1_bzf1Ji9AHaE8?pid=ImgDet&rs=1",
    title: "Bellagamba",
  },
  {
    id: 3,
    image:
      "https://th.bing.com/th/id/OIP.hISrkmLE2i-i1_bzf1Ji9AHaE8?pid=ImgDet&rs=1",
    title: "Bellagamba",
  },
  {
    id: 4,
    image:
      "https://th.bing.com/th/id/OIP.hISrkmLE2i-i1_bzf1Ji9AHaE8?pid=ImgDet&rs=1",
    title: "Bellagamba",
  },
  {
    id: 5,
    image:
      "https://th.bing.com/th/id/OIP.hISrkmLE2i-i1_bzf1Ji9AHaE8?pid=ImgDet&rs=1",
    title: "Bellagamba",
  },
  {
    id: 6,
    image:
      "https://th.bing.com/th/id/OIP.hISrkmLE2i-i1_bzf1Ji9AHaE8?pid=ImgDet&rs=1",
    title: "Bellagamba",
  },
  {
    id: 7,
    image:
      "https://th.bing.com/th/id/OIP.hISrkmLE2i-i1_bzf1Ji9AHaE8?pid=ImgDet&rs=1",
    title: "Bellagamba",
  },
];

type CommerceListScreenProps = StackNavigationProp<
  RootStackParamList,
  "CommerceList"
>;

const CommerceList = () => {
  const navigation = useNavigation<CommerceListScreenProps>();
  return (
    <CardList
      list={cardListArray}
      onPress={() => navigation.navigate("Home")}
    />
  );
};

export default CommerceList;
