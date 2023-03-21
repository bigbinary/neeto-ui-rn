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

  const suggestions = [
    {
      id: "1",
      name: "Oliver Smith",
      imageUrl: "https://picsum.photos/100",
    },
    {
      id: "2",
      name: "Andy neeto",
      imageUrl: "https://picsum.photos/100",
    },
    {
      id: "3",
      name: "This is an example of a long name, very long name.",
      imageUrl: "https://picsum.photos/100",
    },
    {
      id: "4",
      name: "This is an example of a long name, very long name.",
      imageUrl: "https://picsum.photos/100",
    },
  ];

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
          suggestions={suggestions}
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
          onAddNote={console.log}
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
