import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../utils/Types";
import CardList from "../../components/organisms/CardList/CardList";
import styles from "./styles";

type PreparationsScreenProps = StackNavigationProp<RootStackParamList>;
const itemsListMock = [
  { id: 1, image: null, title: "Choripan" },
  { id: 2, image: null, title: "Milanesa Napolitana" },
  { id: 3, image: null, title: "Bondiola Riojana" },
  { id: 4, image: null, title: "Milanesa Riojana" },
  { id: 5, image: null, title: "Pizza Napolitana" },
  { id: 6, image: null, title: "Pizza Mozzarela" },
  { id: 7, image: null, title: "Bife de Chorizo con Papas" },
  { id: 8, image: null, title: "Lomo a la riojana" },
  { id: 9, image: null, title: "Fideos con pesto" },
  { id: 10, image: null, title: "Empanada" },
];

const Preparations = () => {
  const navigation = useNavigation<PreparationsScreenProps>();

  return (
    <View style={styles.container}>
      <CardList
        list={itemsListMock}
        onPress={(e) =>
          console.log(navigation.navigate("PreparationIngredients"))
        }
      />
    </View>
  );
};

export default Preparations;
