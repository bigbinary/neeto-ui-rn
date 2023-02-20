import React from "react";

import { ChatInput, Typography, AnimatedImage, Container } from "@components";

const keyBoardTypes = [
  "default",
  "email-address",
  "numeric",
  "ascii-capable",
  "decimal-pad",
  "number-pad",
  "phone-pad",
  "web-search",
];

const ChatInputMetaData = {
  title: "ChatInput",
  component: ChatInputs,
  argTypes: {
    keyboardType: {
      options: keyBoardTypes,
      control: {
        type: "select",
      },
    },
    value: {
      control: {
        type: "text",
      },
    },
    errorMessage: {
      control: {
        type: "text",
      },
    },
    autoFocus: {
      options: [true, false],
      control: {
        type: "boolean",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    ChatInputProps: {
      secureTextEntry: {
        options: [true, false],
        control: {
          type: "boolean",
        },
      },
    },
  },
  args: {
    label: "Email",
    keyboardType: keyBoardTypes[0],
    value: "oliver@example.com",
    disabled: false,
    autoFocus: false,
    errorMessage: "",
    ChatInputProps: {
      secureTextEntry: false,
    },
  },
};

export default ChatInputMetaData;

export const ChatInputs = args => {
  const [value, setValue] = React.useState(
    "Hey Oliver, We are working on this issue. We will keep you update"
  );

  return (
    <Container flex={1}>
      <Container alignItems="center" flex={1} justifyContent="center">
        <Typography> Desk Example</Typography>
      </Container>
      <Container align-self="end">
        <ChatInput
          attachmentCount={5}
          toEmails="oliver@example.com"
          value={value}
          Attachments={
            <Container alignItems="flex-start">
              <AnimatedImage
                imageHeight={30}
                imageUrl="https://picsum.photos/255/139"
                imageWidth={30}
                resizeMode="cover"
              />
            </Container>
          }
          onChangeText={setValue}
          onCannedResponse={() => {
            alert("On Canned Response");
          }}
          onForward={() => {
            alert("On Forward");
          }}
        />
      </Container>
    </Container>
  );
};
