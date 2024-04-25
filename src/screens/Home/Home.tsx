import React from "react";
import { View } from "react-native";
import TouchableButton from "../../components/molecules/TouchableButton/TouchableButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../utils/Types";
import styles from "./styles";

type CommerceListScreenProps = StackNavigationProp<RootStackParamList>;

const Home = () => {
  const navigation = useNavigation<CommerceListScreenProps>();
  return (
    <View style={styles.container}>
      <TouchableButton
        title="Lista de Valores"
        icon="attach-money"
        typeIcon="material-icons"
        onPress={() => navigation.navigate("TotalPriceList")}
      />
      <TouchableButton
        title="Preparaciones"
        icon="restaurant"
        typeIcon="material"
        onPress={() => navigation.navigate("Preparations")}
      />
      <TouchableButton
        title="Ingredientes"
        icon="lemon"
        typeIcon="font-awesome-5"
        onPress={() => navigation.navigate("Ingredients")}
      />
    </View>
  );
};

export default Home;
