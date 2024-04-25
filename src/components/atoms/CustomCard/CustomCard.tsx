import React from "react";
//import "./styles.scss";
import { Card, Text } from "@rneui/themed";
import { View, Image } from "react-native";
import { CustomCardProps } from "../../../utils/Types";
import styles from "./styles";

const CustomCard: React.FunctionComponent<CustomCardProps> = ({
  image,
  title,
}) => {
  return (
    <Card containerStyle={styles.cardContainer}>
      <View
        style={[styles.card, image ? styles.spaceBetween : styles.flexStart]}
      >
        <View>
          {image && (
            <Image
              style={styles.imageCard}
              resizeMode="cover"
              source={{ uri: image }}
            />
          )}
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </Card>
  );
};

export default CustomCard;
