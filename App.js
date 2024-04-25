import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home/Home";
import CommerceList from "./src/screens/CommerceList/CommerceList";
import Ingredients from "./src/screens/Ingredients/Ingredients";
import Preparations from "./src/screens/Preparations/Preparations";
import PreparationIngredients from "./src/screens/Preparations/PreparationIngredients/PreparationIngredients";
import TotalPriceList from "./src/screens/TotalPriceList/TotalPriceList";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CommerceList">
        <Stack.Screen name="CommerceList" component={CommerceList} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TotalPriceList" component={TotalPriceList} />
        <Stack.Screen name="Preparations" component={Preparations} />
        <Stack.Screen
          name="PreparationIngredients"
          component={PreparationIngredients}
        />
        <Stack.Screen name="Ingredients" component={Ingredients} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
