import React, { useState } from "react";

import { Container, RichTextEditor } from "@components";
import { theme } from "@theme";

const RichTextEditorStories = {
  title: "Rich Text Editor",
};

export default RichTextEditorStories;

export const RichTextEditorComponent = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [attachments, setAttachments] = useState([]);

  const toolbarProps = {};
  const toolbarStyle = {};
  const editorProps = {
    initialContentHTML: "Rich Text Component...",
    initialFocus: true,
    editorStyle: {
      color: theme.colors.font.grey,
    },
  };

  const toolbarWrapperStyle = {
    bottom: 0,
  };

  const borderStyle = {
    color: theme.colors.border.primary,
  };

  const handleOnChange = data => {
    const message = data ? null : "Please write something...";
    if (message === errorMessage) return;
    setErrorMessage(message);
  };

  return (
    <Container flex={1}>
      <RichTextEditor
        attachments={attachments}
        borderStyle={borderStyle}
        editorProps={editorProps}
        errorMessage={errorMessage}
        toolbarProps={toolbarProps}
        toolbarStyle={toolbarStyle}
        toolbarWrapperStyle={toolbarWrapperStyle}
        toolbarActions={[
          "keyboard",
          "setBold",
          "setItalic",
          "insertBulletsList",
          "insertOrderedList",
          "setStrikethrough",
          "setUnderline",
          "undo",
          "redo",
        ]}
        onChange={handleOnChange}
        onSend={() => {}}
        onAttachment={() =>
          setTimeout(() => {
            setAttachments(prev => [
              ...prev,
              {
                url: "https://randomwordgenerator.com/img/picture-generator/57e7d54b4a5ba814f1dc8460962e33791c3ad6e04e5074417c2e7dd3974ec4_640.jpg",
              },
            ]);
          }, 1000)
        }
        onDelete={() => {
          const oldData = [...attachments];
          oldData.splice(0, 1);
          setAttachments(oldData);
        }}
      />
    </Container>
  );
};
