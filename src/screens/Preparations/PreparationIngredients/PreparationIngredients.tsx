import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../utils/Types";
import ItemList from "../../../components/organisms/ItemList.tsx/ItemList";
import styles from "./styles";
import ItemCard from "../../../components/atoms/ItemCard/ItemCard";

type IngredientsScreenProps = StackNavigationProp<RootStackParamList>;
const itemsListMock = [
  { id: 1, title: "Papa", unit: "Kg", amount: 0.9, price: 500 },
  { id: 2, title: "Cebolla", unit: "Kg", amount: 0.7, price: 300 },
  { id: 3, title: "Huevo", unit: "U", amount: 3, price: 100 },
  { id: 4, title: "Aceite", unit: "L", amount: 0.1, price: 400 },
];

const PreparationIngredients = () => {
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
            amount={item.amount}
            price={item.price}
          />
        )}
      />
    </View>
  );
};

export default PreparationIngredients;
