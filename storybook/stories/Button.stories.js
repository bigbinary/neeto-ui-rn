import React from "react";
import { Button, Typography, Container } from "@components";
import { ActivityIndicator } from "react-native";

const ButtonMetaData = {
  title: "Buttons",
  component: Button,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {},
};

export default ButtonMetaData;

export const Buttons = () => {
  return (
    <>
      <Button my={9} width={200} label="Default is solid" />
      <Button my={9} width={200} disabled label="Default Disbaled" />
      <Button
        my={9}
        width={200}
        variant="solid"
        disbaled
        label="Solid Button"
      />
      <Button
        my={9}
        width={200}
        variant="solid"
        disabled
        label="Solid Button Disabled"
      />
      <Button my={9} width={200} variant="inverse" label="Inverse Button" />
      <Button
        my={9}
        width={200}
        variant="inverse"
        disabled
        label="Invese Button Disabled"
      />
      <Button my={9} width={200} variant="text" label="Text Button" />
      <Button
        my={9}
        width={200}
        variant="text"
        disabled
        label="Text Button Disabled"
      />
      <Button
        my={9}
        width={200}
        variant="inverse"
        label="Like"
        RightIcon={() => {
          return <Typography>👍</Typography>;
        }}
      />
      <Button
        my={9}
        width={200}
        variant="inverse"
        label="Subscribe and Follow"
        RightIcon={() => {
          return <Typography>🔔</Typography>;
        }}
        LeftIcon={() => {
          return <Typography>📣</Typography>;
        }}
      />
      <Button
        my={9}
        width={200}
        variant="inverse"
        disabled
        label="Unsubscribe Disabled"
        RightIcon={() => {
          return <Typography>🔕</Typography>;
        }}
      />
      <Button
        my={9}
        width={200}
        bg="background.primary"
        color="font.danger"
        label="Logout"
      />
      <Button
        my={9}
        width={200}
        bg="background.primary"
        color="font.danger"
        fontSize="xl"
        label="Bigger Button"
      />
      <Button
        my={9}
        width={200}
        fontFamily="inter400"
        label="Regular inter 400"
      />
      <Button
        my={9}
        width={200}
        variant="inverse"
        label="Icon in extreme right"
        RightIcon={() => {
          return (
            <Container flex={1} alignItems="flex-end">
              <Typography>🔔</Typography>
            </Container>
          );
        }}
      />

      <Button
        my={9}
        isLoading={true}
        Loader={() => {
          return <ActivityIndicator size="small" color="white" />;
        }}
        width={200}
        label="Solid Loading "
      />
      <Button
        my={9}
        isLoading={true}
        Loader={() => {
          return <ActivityIndicator size="small" color="white" />;
        }}
        width={200}
        loadingText=""
        label="Solid Loading "
      />
      <Button
        my={9}
        isLoading={true}
        Loader={() => {
          return <ActivityIndicator size="small" color="black" />;
        }}
        width={200}
        variant="inverse"
        label="Inverse Loading "
      />
      <Button
        my={9}
        isLoading={true}
        Loader={() => {
          return <ActivityIndicator size="small" color="black" />;
        }}
        width={200}
        variant="text"
        label="Text Loading"
      />
      <Button
        my={9}
        isLoading={true}
        Loader={() => {
          return <ActivityIndicator size="small" color="black" />;
        }}
        width={200}
        variant="text"
        loadingText="Ordering Pizza..."
        label="Text Loading"
        RightIcon={() => {
          return (
            <Container>
              <Typography>🍕</Typography>
            </Container>
          );
        }}
      />
    </>
  );
};
