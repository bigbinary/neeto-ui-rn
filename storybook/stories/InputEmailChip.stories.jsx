import React from "react";

import { InputEmailChip, Container, Typography } from "@components";

const InputEmailChipMetaData = {
  title: "InputEmailChip",
  component: InputEmailChipDemo,
  argTypes: {
    initialEmails: {
      control: {
        type: "array",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
  },
  args: {},
};

export default InputEmailChipMetaData;

const Template = args => {
  const { title, ...rest } = args;

  return (
    <Container mb={20}>
      <Typography color="font.grey800">{title}</Typography>
      <InputEmailChip {...rest} />
    </Container>
  );
};

export const InputEmailChipDemo = () => (
  <>
    <Template
      initialEmails={["oliver@example.com", "john@example.com"]}
      label="Emails"
      title="initialEmails & label"
    />
    <Template
      initialEmails={["oliver@example.com", "john@example.com"]}
      title="initialEmails Only"
    />
    <Template label="Emails" title="label only" />
    <Template
      disabled
      initialEmails={["oliver@example.com", "john@example.com"]}
      label="Emails"
      title="disabled with initialEmails & label"
    />
  </>
);
