import React from "react";
import { Input } from "@components";

const InputMetaData = {
  title: "Input",
  component: InputMetaData,
  argTypes: {},
  args: {},
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
      <Input label="Password" {...props} value="password" secureTextEntry />
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
