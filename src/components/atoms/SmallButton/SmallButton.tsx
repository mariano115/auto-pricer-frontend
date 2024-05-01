import React from "react";
import { Button } from "@rneui/themed";
import styles from "./styles";
import { SmallButtonProps } from "../../../utils/Types";

const SmallButton: React.FunctionComponent<SmallButtonProps> = ({
  icon,
  onPress,
}) => {
  return (
    <Button onPress={onPress} icon={icon} buttonStyle={styles.buttonStyle} />
  );
};

export default SmallButton;
