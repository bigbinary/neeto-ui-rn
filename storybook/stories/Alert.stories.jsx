import React from "react";

import { Container, Button, Alert } from "@components";

const AlertStories = {
  title: "Alert",
};
export default AlertStories;

export const AlertDemo = () => (
  <Container alignItems="center" flex={1} justifyContent="center">
    <Alert />
    <Button
      label="With Default Button"
      my={10}
      width={200}
      onPress={() => {
        Alert.show({
          title: "Successful !!",
          description: "Your profile has been updated successfully",
        });
      }}
    />
    <Button
      label="Single Button"
      my={10}
      width={200}
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
      label="Two Buttons"
      my={10}
      width={200}
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
      label="Three Buttons"
      my={10}
      width={200}
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
      label="Non Cancelable "
      my={10}
      width={200}
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
      label="Danger Buttons"
      my={10}
      width={200}
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
