import React from "react";
import { View, Text, StyleSheet } from "react-native";

// components
import MainTitleText from "../../src/components/atoms/MainTitleText";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MainTitleText text="今日のすれ違い" />
      <MainTitleText text="すれ違いからのおすすめ曲" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#000000",
  },
});

export default HomeScreen;
