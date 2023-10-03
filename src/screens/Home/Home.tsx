import React from "react";
import CardList from "../../components/organisms/CardList/CardList";
import { Button, FlatList, StyleSheet, View } from "react-native";
import TouchableButton from "../../components/molecules/TouchableButton/TouchableButton";
import { RootStackParamList } from "../RootStackPrams";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

type CommerceListScreenProps = StackNavigationProp<
  RootStackParamList,
  "CommerceList"
>;

const Home = () => {
  const navigation = useNavigation<CommerceListScreenProps>();
  return (
    <View style={styles.container}>
      <TouchableButton
        title="Preparaciones"
        onPress={() => navigation.navigate("CommerceList")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingTop: "10%"
  },
});

export default Home;
