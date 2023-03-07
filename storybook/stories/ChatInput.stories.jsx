import React, { useRef } from "react";

import {
  ChatInput,
  Button,
  Typography,
  AnimatedImage,
  Container,
} from "@components";

const ChatInputMetaData = {
  title: "ChatInput",
  component: ChatInputs,
};

export default ChatInputMetaData;

export const ChatInputs = () => {
  const chatInputRef = useRef();

  const [value, setValue] = React.useState(
    "Hey Oliver, We are working on this issue. We will keep you update"
  );

  return (
    <Container flex={1}>
      <Container alignItems="center" flex={1} justifyContent="center">
        <Typography> Desk Example</Typography>
        <Button
          label="Clear Email Fields"
          variant="text"
          onPress={() => chatInputRef.current.clearEmailFields()}
        />
      </Container>
      <Container align-self="end">
        <ChatInput
          shouldShowEmailFields
          showReplyMenuOptions
          attachmentsCount={2}
          ref={chatInputRef}
          toEmails={["oliver@example.com"]}
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
