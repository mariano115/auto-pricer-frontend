import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  flexStart: {
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 25,
    paddingRight: "20%",
  },
  imageCard: {
    width: 100,
    height: 100,
  },
});

export default styles;
