import React from "react";
import { Input, Container } from "@components";
import { theme } from "../../src/theme";
import Icon from "react-native-remix-icon";

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
    secureTextEntry: {
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
    secureTextEntry: false,
  },
};

export default InputMetaData;

export const Inputs = () => {
  const customStyles = { color: "font.danger", fontFamily: "inter700" };
  return (
    <>
      <Container mb={20}>
        <Input label="Default Input" />
      </Container>
      <Container mb={20}>
        <Input label="Input with Focus styles" enableFocusStyle={true} />
      </Container>
      <Container mb={20}>
        <Input label="with placeholder" placeholder="Placeholder" />
      </Container>
      <Container mb={20}>
        <Input
          label="with custom label styles"
          labelStyles={customStyles}
          placeholder="Placeholder"
          color="red"
        />
      </Container>
      <Container mb={20}>
        <Input label="with value" value="has value" />
      </Container>
      <Container mb={20}>
        <Input label="Disabled" disabled={true} />
      </Container>
      <Container mb={20}>
        <Input
          label="with error message"
          message="This is an error"
          error={true}
        />
      </Container>
      <Container mb={20}>
        <Input
          label="Email"
          color="font.primary"
          value="bigbinary@example.com"
          keyboardType="email-address"
        />
      </Container>
      <Container mb={20}>
        <Input
          label="Password"
          value="passwordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpassword"
          secureTextEntry
        />
      </Container>
      <Container mb={20}>
        <Input
          label="inline input with password type"
          value="test"
          inline={true}
          secureTextEntry
        />
      </Container>
      <Container mb={20}>
        <Input label="Inline" inline={true} />
      </Container>
      <Container mb={20}>
        <Input label="Inline with error" inline={true} error />
      </Container>
      <Container mb={20}>
        <Input label="inline disabled input" inline={true} disabled={true} />
      </Container>
      <Container mb={20}>
        <Input label="Brand Left" brandLeft="BRAND-LEFT" />
      </Container>
      <Container mb={20}>
        <Input label="Brand Right" brandRight="BRAND-RIGHT" />
      </Container>
      <Container mb={20}>
        <Input
          label="Custom brand color and background"
          brandRight="BRAND-RIGHT"
          brandColor="font.white"
          brandBackground="background.danger"
        />
      </Container>
      <Container mb={20}>
        <Input label="Notes" height={100} multiline={true} />
      </Container>
      <Container mb={20}>
        <Input
          placeholder="Search"
          // eslint-disable-next-line react-native/no-inline-styles
          containerStyles={{
            backgroundColor: "background.grey200",
            borderRadius: 10,
          }}
          LeftIcon={() => {
            return (
              <Container flexDirection="row">
                <Icon
                  name="ri-search-line"
                  size={20}
                  color={theme.colors.background.grey800}
                />
              </Container>
            );
          }}
        />
      </Container>
      <Container mb={20}>
        <Input
          // eslint-disable-next-line react-native/no-inline-styles
          containerStyles={{
            backgroundColor: "background.grey200",
          }}
          RightIcon={() => {
            return (
              <Container flexDirection="row">
                <Icon
                  name="ri-search-line"
                  size={20}
                  color={theme.colors.background.grey800}
                />
              </Container>
            );
          }}
        />
      </Container>
    </>
  );
};

export const InputDemo = args => {
  return <Input {...args} />;
};
