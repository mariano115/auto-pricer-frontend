import { TouchableOpacity } from "react-native";
import CustomCard from "../../atoms/CustomCard/CustomCard";
import { TouchableCardProps } from "../../../utils/Types";
import styles from "./styles";

const TouchableCard: React.FunctionComponent<TouchableCardProps> = ({
  image,
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.touchable]}>
      <CustomCard image={image} title={title} />
    </TouchableOpacity>
  );
};

export default TouchableCard;
