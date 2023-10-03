import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import CustomCard from "../../atoms/CustomCard/CustomCard";
import CustomButton from "../../atoms/CustomButton/CustomButton";

export type TouchableButtonProps = {
  leftIcon?: string;
  title: string;
  rightIcon?: string;
  onPress: (event: GestureResponderEvent) => void;
};

const TouchableButton: React.FunctionComponent<TouchableButtonProps> = ({
  leftIcon,
  title,
  rightIcon,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <CustomButton leftIcon={leftIcon} title={title} rightIcon={rightIcon}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#DDDDDD",
    borderRadius: 20,
  },
});

export default TouchableButton;
