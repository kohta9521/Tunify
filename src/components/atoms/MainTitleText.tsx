import React from "react";
import { View, Text, StyleSheet } from "react-native";

export interface MainTitleTextProps {
  text: string;
}

const MainTitleText = ({ text }: MainTitleTextProps) => {
  return (
    <View style={styles.textBox}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    width: "100%",
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default MainTitleText;
