import React from "react";

import { ChatInput } from "@components";

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
  const [value, setValue] = React.useState("");

  return (
    <ChatInput
      value={value}
      onChangeText={setValue}
      onCannedResponse={() => {
        alert("On Canned Response");
      }}
      onForward={() => {
        alert("On Forward");
      }}
    />
  );
};
