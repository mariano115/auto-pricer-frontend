import { GestureResponderEvent, StyleSheet, TouchableOpacity } from "react-native";
import CustomCard from "../../atoms/CustomCard/CustomCard";

export type TouchableCardProps = {
  image: string;
  title: string;
  onPress: (event: GestureResponderEvent) => void;
};

const TouchableCard: React.FunctionComponent<TouchableCardProps> = ({
  image,
  title,
  onPress
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.touchable]}
    >
      <CustomCard image={image} title={title} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    touchable: {
    display: 'flex',
    width: "100%",
    borderRadius: 30
  },
});

export default TouchableCard;
