import { StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../utils/Types";
import ItemList from "../../components/organisms/ItemList.tsx/ItemList";
import styles from "./styles";
import ItemCard from "../../components/atoms/ItemCard/ItemCard";
import SmallButton from "../../components/atoms/SmallButton/SmallButton";

type TotalPriceListScreenProps = StackNavigationProp<RootStackParamList>;
const itemsListMock = [
  { id: 1, title: "Suprema de Pollo", price: 1100 },
  { id: 2, title: "Pan Rallado", price: 200 },
  { id: 3, title: "Tomate", price: 400 },
];

const TotalPriceList = () => {
  const navigation = useNavigation<TotalPriceListScreenProps>();

  return (
    <View style={styles.container}>
      <ItemList
        list={itemsListMock}
        onPress={() => {}}
        renderItemComponent={(item) => (
          <ItemCard
            id={item.id}
            title={item.title}
            price={item.price}
            customRender={
              <SmallButton
                icon={{
                  name: "edit",
                  type: "material-icons",
                  color: "white",
                  size: 30,
                }}
                onPress={() => {}}
              />
            }
          />
        )}
      />
    </View>
  );
};

export default TotalPriceList;
