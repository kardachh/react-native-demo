import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Navbar = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "green",
    paddingBottom: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
