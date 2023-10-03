import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home/Home";
import CommerceList from "./src/screens/CommerceList/CommerceList";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
/*     <View style={styles.container}>
      <StatusBar style="auto" />
      <CommerceList/> */
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CommerceList">
          <Stack.Screen name="CommerceList" component={CommerceList} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
/*     </View> */
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
