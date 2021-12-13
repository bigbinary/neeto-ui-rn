import React from "react";
import { Input } from "@components";
import { theme } from "../../src/theme";

const fontColors = Object.keys(theme.colors.font).map(color => `font.${color}`);
const backgroundColors = Object.keys(theme.colors.background).map(
  color => `background.${color}`
);

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
  component: InputDemo,
  argTypes: {
    keyboardType: {
      options: keyBoardTypes,
      control: {
        type: "select",
      },
    },
    inputPassword: {
      options: [true, false],
      control: {
        type: "boolean",
      },
    },
    defaultValue: {
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
    brandColor: {
      options: fontColors,
      control: {
        type: "select",
      },
    },
    brandBackground: {
      options: backgroundColors,
      control: {
        type: "select",
      },
    },
  },
  args: {
    label: "Default",
    keyboardType: keyBoardTypes[0],
    defaultValue: null,
    placeholder: "placeholder",
    disabled: false,
    inline: false,
    brandLeft: null,
    brandRight: null,
    brandColor: null,
    brandBackground: null,
    inputPassword: false,
  },
};

export default InputMetaData;

export const Inputs = () => {
  return (
    <>
      <Input label="Default Input" />
      <Input label="with placeholder" placeholder="Placeholder" />
      <Input label="with value" value="has value" />
      <Input label="Disabled" disabled={true} />
      <Input
        label="with error message"
        message="This is an error"
        error={true}
      />
      <Input
        label="Email"
        value="bigbinary@example.com"
        keyboardType="email-address"
      />
      <Input label="Password" value="password" inputPassword />
      <Input
        label="inline input with password type"
        value="test"
        inputPassword
      />
      <Input label="Inline" inline={true} />
      <Input label="Inline with error" inline={true} error />
      <Input label="inline disabled input" inline={true} disabled={true} />
      <Input label="Brand Left" brandLeft="BRAND-LEFT" />
      <Input label="Brand Right" brandRight="BRAND-RIGHT" />
      <Input
        label="Custom brand color and background"
        brandRight="BRAND-RIGHT"
        brandColor="font.white"
        brandBackground="background.danger"
      />
    </>
  );
};

export const InputDemo = args => {
  return <Input {...args} />;
};
