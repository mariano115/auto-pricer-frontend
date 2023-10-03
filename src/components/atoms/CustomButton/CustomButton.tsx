import React from "react";
//import "./styles.scss";
import { Card, Icon, Text } from "@rneui/themed";
import { View, Image, StyleSheet, GestureResponderEvent } from "react-native";

export type CustomButtonProps = {
  leftIcon?: string;
  title: string;
  rightIcon?: string;
};

const CustomButton: React.FunctionComponent<CustomButtonProps> = ({
  leftIcon,
  title,
  rightIcon,
}) => {
  return (
    <Card>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Icon name="g-translate" color="#00aced" />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Icon name="g-translate" color="#00aced" />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    verticalAlign: "middle",
    textAlign: "center",
    justifyContent: "space-between",
    backgroundColor: "red",
    width: "85%",
  },
  /* container: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
    backgroundColor: "yellow"
  }, */
  titleContainer: {},
  title: {
    fontSize: 25,
    /* paddingRight: "20%", */
  },
  imageContainer: {
    /* backgroundColor: 'yellow' */
  },
  imageCard: {
    width: 100,
    height: 100,
  },
});

export default CustomButton;
