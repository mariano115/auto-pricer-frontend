import { StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../utils/Types";
import ItemList from "../../components/organisms/ItemList.tsx/ItemList";
import styles from "./styles";
import ItemCard from "../../components/atoms/ItemCard/ItemCard";

type IngredientsScreenProps = StackNavigationProp<RootStackParamList>;
const itemsListMock = [
  { id: 1, title: "Suprema de Pollo", unit: "Kg", price: 1100 },
  { id: 2, title: "Pan Rallado", unit: "Kg", price: 200 },
  { id: 3, title: "Tomate", unit: "Kg", price: 400 },
];

const Ingredients = () => {
  const navigation = useNavigation<IngredientsScreenProps>();

  return (
    <View style={styles.container}>
      <ItemList
        list={itemsListMock}
        onPress={() => {}}
        renderItemComponent={(item) => (
          <ItemCard
            id={item.id}
            title={item.title}
            unit={item.unit}
            price={item.price}
          />
        )}
      />
    </View>
  );
};

export default Ingredients;
