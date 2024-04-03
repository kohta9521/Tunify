import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// コンポーネントのプロパティ型を定義するインターフェース
export interface ButtonProps {
  text: string;
  color?: string;
  size?: "small" | "medium" | "large";
  onPress: () => void; // onPressプロパティは関数型であることを定義
}

const BasicButton = ({ text, color, size, onPress }: ButtonProps) => {
  const buttonStyles = {
    backgroundColor: color || "blue", // デフォルトの色を指定
    ...styles[size || "medium"], // デフォルトのサイズを指定
  };

  return (
    <TouchableOpacity style={[styles.button, buttonStyles]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

// サイズに応じたスタイル定義
const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  small: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  medium: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
});

export default BasicButton;
