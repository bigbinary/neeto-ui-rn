import React from "react";
import { Container, Button, Toast } from "@components";

const types = ["success", "error", "info", "warning"];
const positions = ["bottom", "top"];
const ToastMessage = {
  title: "ToastMessage",
  component: Toast,
  args: {
    text1: "Yay!",
    text2: "Have a nice day! 😄",
    type: types[0],
    position: positions[0],
  },
  argTypes: {
    type: {
      options: types,
      control: {
        type: "select",
      },
    },
    position: {
      options: positions,
      control: {
        type: "select",
      },
    },
  },
};
export default ToastMessage;

export const ToastDemo = props => {
  return (
    <Container flex={1}>
      <Toast />
      <Button
        my={10}
        label="Show Toast"
        onPress={() => {
          Toast.show({
            ...props,
          });
        }}
      />
    </Container>
  );
};

export const Toasts = () => {
  return (
    <Container flex={1}>
      <Toast />
      <Button
        my={10}
        label="Success Toast"
        onPress={() => {
          Toast.show({
            type: "success",
            position: "bottom",
            text1: "Yay!",
            text2: "Showing Success Toast Message!",
          });
        }}
      />
      <Button
        my={10}
        label="Error Toast"
        onPress={() => {
          Toast.show({
            type: "error",
            position: "bottom",
            text1: "Ohh!",
            text2: "Showing Error Toast Message!",
          });
        }}
      />
      <Button
        my={10}
        label="Info Toast"
        onPress={() => {
          Toast.show({
            type: "info",
            position: "bottom",
            text1: "Ohh!",
            text2: "Showing Info Toast Message!",
          });
        }}
      />
      <Button
        my={10}
        label="Warning Toast"
        onPress={() => {
          Toast.show({
            type: "warning",
            position: "bottom",
            text1: "Ohh!",
            text2: "Showing Warning Toast Message!",
          });
        }}
      />
    </Container>
  );
};
