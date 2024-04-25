import { Text } from "@rneui/base";
import { Button, Divider } from "@rneui/themed";
import styles from "./styles";
import { CardProps } from "../../../utils/Types";

const ItemCard: React.FunctionComponent<CardProps> = ({
  id,
  title,
  unit,
  amount,
  price,
  customFunction,
}) => {
  return (
    <Button
      buttonStyle={[styles.buttonStyle, styles.shadow]}
      type="outline"
      titleStyle={{ color: "rgba(78, 116, 289, 1)" }}
      containerStyle={styles.buttonContainer}
    >
      <Text style={[styles.titleText, styles.size_19]}>{title}</Text>
      {unit && <Text style={[styles.unitText, styles.size_19]}>{unit}</Text>}
      {amount && (
        <Text style={[styles.amountText, styles.size_19]}>{amount}</Text>
      )}
      <Text style={[styles.priceText, styles.size_19]}>$ {price}</Text>
    </Button>
  );
};

export default ItemCard;
