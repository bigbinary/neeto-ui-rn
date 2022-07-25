import React from "react";
import { Input, Container, Typography } from "@components";
import { theme } from "../../src/theme";
import Icon from "react-native-remix-icon";

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

export default InputMetaData;

export const Inputs = () => {
  return (
    <>
      <Container mb={20}>
        <Typography py={2}>Default Input</Typography>
        <Input label="Email" value="" onChangeText={() => {}} />
      </Container>
      <Container mb={20}>
        <Typography py={2}>Focused Input</Typography>
        <Input
          label="Email"
          autoFocus={true}
          value=""
          onChangeText={() => {}}
        />
      </Container>
      <Container mb={20}>
        <Typography py={2}>Input Containing Value</Typography>
        <Input
          label="Email"
          placeholder="Placeholder"
          value="oliver@example.com"
          onChangeText={() => {}}
        />
      </Container>
      <Container mb={20}>
        <Typography py={2}>Disabled Input Without Value</Typography>
        <Input label="Email" disabled={true} value="" onChangeText={() => {}} />
      </Container>
      <Container mb={20}>
        <Typography py={2}>Disabled Input With Value</Typography>
        <Input
          label="Email"
          value="oliver@example.com"
          onChangeText={() => {}}
          disabled={true}
        />
      </Container>
      <Container mb={20}>
        <Typography py={2}>Input With Error</Typography>
        <Input
          label="Email"
          value="oliver.com"
          errorMessage="Please enter a valid email."
          onChangeText={() => {}}
        />
      </Container>
      <Container mb={20}>
        <Typography py={2}>Input With Left Icon</Typography>
        <Input
          label="Email"
          value=""
          onChangeText={() => {}}
          PrefixIcon={() => {
            return (
              <Container flexDirection="row">
                <Icon
                  name="ri-mail-line"
                  size={22}
                  color={theme.colors.background.grey600}
                />
              </Container>
            );
          }}
        />
      </Container>
      <Container mb={20}>
        <Typography py={2}>Input With Right Icon</Typography>
        <Input
          label="Email"
          value=""
          onChangeText={() => {}}
          SuffixIcon={() => {
            return (
              <Container flexDirection="row">
                <Icon
                  name="ri-arrow-down-s-line"
                  size={22}
                  color={theme.colors.background.grey600}
                />
              </Container>
            );
          }}
        />
      </Container>
      <Container mb={20}>
        <Container mb={20}>
          <Typography py={2}>Input With Icon and Value</Typography>
          <Input
            label="Email"
            value="oliver@example.com"
            onChangeText={() => {}}
            PrefixIcon={() => {
              return (
                <Container flexDirection="row">
                  <Icon
                    name="ri-mail-line"
                    size={22}
                    color={theme.colors.background.grey600}
                  />
                </Container>
              );
            }}
            SuffixIcon={() => {
              return (
                <Container flexDirection="row">
                  <Icon
                    name="ri-arrow-down-s-line"
                    size={22}
                    color={theme.colors.background.grey600}
                  />
                </Container>
              );
            }}
          />
        </Container>
      </Container>
      <Container mb={20}>
        <Typography py={2}>Input With Secured Content</Typography>
        <Input
          label="Password"
          value="Password"
          onChangeText={() => {}}
          inputProps={{ secureTextEntry: true }}
        />
      </Container>
      <Container mb={20}>
        <Typography py={2}>Input With Multiline Content</Typography>
        <Input
          label="Message"
          value="Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit.
          In sagittis scelerisque euismod. 
          Vivamus efficitur libero ut fermentum elementum.
          Aenean scelerisque sed augue quis vestibulum. "
          onChangeText={() => {}}
          inputProps={{ multiline: true }}
        />
      </Container>
    </>
  );
};

export const InputDemo = args => {
  return <Input {...args} />;
};
