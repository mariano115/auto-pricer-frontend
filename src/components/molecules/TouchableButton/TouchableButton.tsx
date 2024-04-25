import * as reactNative from "react-native";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import { TouchableButtonProps } from "../../../utils/Types";
import styles from "./styles";

const TouchableButton: React.FunctionComponent<TouchableButtonProps> = ({
  title,
  icon,
  typeIcon,
  onPress,
}) => {
  return (
    <reactNative.View style={styles.button}>
      <CustomButton
        title={title}
        icon={icon}
        typeIcon={typeIcon}
        onPress={onPress}
      />
    </reactNative.View>
  );
};

export default TouchableButton;
