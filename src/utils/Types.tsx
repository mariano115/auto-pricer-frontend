import { GestureResponderEvent } from "react-native";

export type CardProps = {
  id: number;
  title: string;
  unit?: string;
  amount?: number;
  price: number;
  customRender?: JSX.Element;
};

export type CustomCardProps = {
  image: string | null;
  title: string;
};

export type TouchableCardProps = {
  image: string | null;
  title: string;
  onPress: (event: GestureResponderEvent) => void;
};

export type CardListProps = {
  list: { id: number; image: string | null; title: string }[];
  onPress: (event: GestureResponderEvent) => void;
};

export type TouchableButtonProps = {
  title: string;
  icon: string;
  typeIcon: string;
  onPress: (event: GestureResponderEvent) => void;
};

export type CustomButtonProps = {
  title?: string;
  icon?: string;
  typeIcon?: string;
  onPress?: (event: GestureResponderEvent) => void;
};

export type SmallButtonProps = {
  icon?: IconProps;
  onPress?: (event: GestureResponderEvent) => void;
};

export type ItemListProps = {
  list: {
    id: number;
    title: string;
    unit: string | undefined;
    amount: number | undefined;
    price: number;
  }[];
  onPress: (event: GestureResponderEvent) => void;
};

export type RootStackParamList = {
  CommerceList: undefined;
  Home: undefined;
  Ingredients: undefined;
  TotalPriceList: undefined;
  Preparations: undefined;
  PreparationIngredients: undefined;
};

export type IconProps = {
  name: string;
  type: string;
  size: number;
  color: string;
};
