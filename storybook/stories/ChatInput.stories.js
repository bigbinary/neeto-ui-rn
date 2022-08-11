import React, { useState } from "react";
import { ChatInput, Container, Typography } from "@components";

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
  component: ChatInputDemo,
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
    inputProps: {
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
    inputProps: {
      secureTextEntry: false,
    },
  },
};

export default ChatInputMetaData;

export const ChatInputs = () => {
  const [text, setText] = useState("");
  return (
    <>
      <Container>
        <Typography py={2}>Chat Input</Typography>
        <ChatInput
          placeholder="Type a message"
          value={text}
          onChangeText={setText}
          inputProps={{
            multiline: true,
            maxHeight: 120,
          }}
        />
      </Container>
    </>
  );
};

export const ChatInputDemo = args => {
  const [value, setValue] = React.useState(args.value);

  return <ChatInput {...args} value={value} onChangeText={setValue} />;
};
