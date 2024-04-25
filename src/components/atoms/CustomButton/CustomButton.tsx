import React from "react";
import { Button } from "@rneui/themed";
import styles from "./styles";
import { CustomButtonProps } from "../../../utils/Types";

const CustomButton: React.FunctionComponent<CustomButtonProps> = ({
  title,
  icon,
  typeIcon,
  onPress,
}) => {
  return (
    <Button
      onPress={onPress}
      title={title}
      icon={{
        name: icon,
        type: typeIcon,
        size: 100,
        color: "white",
      }}
      iconContainerStyle={styles.iconContainerStyle}
      titleStyle={styles.titleStyle}
      buttonStyle={styles.buttonStyle}
      containerStyle={styles.containerStyle}
    />
  );
};

export default CustomButton;
