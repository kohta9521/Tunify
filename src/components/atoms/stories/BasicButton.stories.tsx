import React from "react";
import { Story, Meta } from "@storybook/react";
import BasicButton, { ButtonProps } from "../BasicButton";

// Meta情報
export default {
  title: "Components/BasicButton",
  component: BasicButton,
  argTypes: {
    text: { control: "text" },
    color: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    onPress: { action: "clicked" }, // onPressイベントを追加
  },
} as Meta;

// ボタンのストーリー
const Template: Story<ButtonProps> = (args) => <BasicButton {...args} />;

// 各種サイズのボタンを生成
export const SmallButton = Template.bind({});
SmallButton.args = {
  text: "Small Button",
  size: "small",
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  text: "Medium Button",
  size: "medium",
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  text: "Large Button",
  size: "large",
};

// カスタム色のボタン
export const CustomColorButton = Template.bind({});
CustomColorButton.args = {
  text: "Custom Color Button",
  color: "#ff0000", // カスタム色を指定
};
