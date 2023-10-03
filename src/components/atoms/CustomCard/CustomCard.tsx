import React from "react";
//import "./styles.scss";
import { Card, Text } from "@rneui/themed";
import { View, Image, StyleSheet } from "react-native";

export type CardProps = {
  image: string;
  title: string;
};

const CustomCard: React.FunctionComponent<CardProps> = ({ image, title }) => {
  return (
    <Card>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
        <Image
          style={styles.imageCard}
          resizeMode="cover"
          source={{ uri: image }}
        />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleContainer:{
    /* backgroundColor:'green' */
  },
  title: {
    fontSize: 25,
    paddingRight: '20%'
  },
  imageContainer:{
    /* backgroundColor: 'yellow' */
  },
  imageCard: {
    width: 100,
    height: 100,
  },
});

export default CustomCard;
