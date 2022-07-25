import React from "react";
import { Container, Button, Alert } from "@components";

const AlertStories = {
  title: "Alert",
};
export default AlertStories;

export const AlertDemo = () => {
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Alert />
      <Button
        width={200}
        my={10}
        label="With Default Button"
        onPress={() => {
          Alert.show({
            title: "Successful !!",
            description: "Your profile has been updated successfully",
          });
        }}
      />
      <Button
        width={200}
        my={10}
        label="Single Button"
        onPress={() => {
          Alert.show({
            title: "Successful !!",
            description: "Your profile has been updated successfully",
            buttons: [
              {
                label: "Yay!",
                onPress: () => {},
                variant: "text",
              },
            ],
          });
        }}
      />

      <Button
        width={200}
        my={10}
        label="Two Buttons"
        onPress={() => {
          Alert.show({
            title: "Logout",
            description: "Are you sure you want to logout?",
            buttons: [
              {
                label: "Yay!",
                onPress: () => {},
                variant: "solid",
              },
              {
                label: "No",
                onPress: () => {},
                variant: "text",
              },
            ],
            onDismiss: () => {},
          });
        }}
      />

      <Button
        width={200}
        my={10}
        label="Three Buttons"
        onPress={() => {
          Alert.show({
            title: "Enjoying our app ?",
            description: "Do you wannna rate us on app store ?",
            buttons: [
              {
                label: "Yay!",
                onPress: () => {},
              },
              {
                label: "No",
                onPress: () => {},
              },
              {
                label: "Ask me later",
                onPress: () => {},
              },
            ],
          });
        }}
      />

      <Button
        width={200}
        my={10}
        label="Non Cancelable "
        onPress={() => {
          Alert.show({
            title: "Alert !!",
            description: "You need to agree to proceed.",
            buttons: [
              {
                label: "Agree!",
                onPress: () => {},
              },
            ],
            isCancelable: false,
          });
        }}
      />
      <Button
        width={200}
        my={10}
        label="Danger Buttons"
        onPress={() => {
          Alert.show({
            title: "Delete",
            description: "Are you sure you want to delete?",
            buttons: [
              {
                label: "Yay!",
                onPress: () => {},
                variant: "danger",
              },
              {
                label: "No",
                onPress: () => {},
              },
            ],
            onDismiss: () => {},
          });
        }}
      />
    </Container>
  );
};
