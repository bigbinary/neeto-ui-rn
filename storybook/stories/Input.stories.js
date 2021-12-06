import React from "react";
import { Input } from "@components";

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

const InputMetaData = {
  title: "Input",
  component: InputMetaData,
  argTypes: {
    keyboardType: {
      options: keyBoardTypes,
      control: {
        type: "select",
      },
    },
    secureTextEntry: {
      options: [true, false],
      control: {
        type: "boolean",
      },
    },
    value: {
      control: {
        type: "text",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    brandLeft: {
      control: {
        type: "text",
      },
    },
    brandRight: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    label: "Default",
    keyboardType: keyBoardTypes[0],
    secureTextEntry: false,
    value: null,
    placeholder: "placeholder",
    disabled: false,
    inline: false,
    brandLeft: null,
    brandRight: null,
  },
};

export default InputMetaData;

export const Inputs = props => {
  return (
    <>
      <Input label="Default Input" {...props} />
      <Input label="with placeholder" placeholder="Placeholder" {...props} />
      <Input label="with value" value="has value" {...props} />
      <Input label="Disabled" {...props} disabled={true} />
      <Input
        label="with error message"
        {...props}
        message="This is an error"
        error={true}
      />
      <Input
        label="Email"
        value="bigbinary@example.com"
        keyboardType="email-address"
        {...props}
      />
      <Input
        label="Password"
        {...props}
        value="password"
        secureTextEntry={true}
      />
      <Input label="Inline" inline={true} {...props} />
      <Input label="Inline with error" inline={true} error {...props} />
      <Input
        label="inline disabled input"
        inline={true}
        disabled={true}
        {...props}
      />
      <Input label="Brand Left" brandLeft="BRAND-LEFT" {...props} />
      <Input label="Brand Right" brandRight="BRAND-RIGHT" {...props} />
    </>
  );
};

export const InputDemo = args => {
  return <Input {...args} />;
};
