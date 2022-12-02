import React, { useState } from "react";

import { Container, RichTextEditor } from "@components";
import { theme } from "@theme";

const RichTextEditorStories = {
  title: "Rich Text Editor",
};

export default RichTextEditorStories;

export const RichTextEditorComponent = () => {
  const [errorMessage, setErrorMessage] = useState(null);

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
      />
    </Container>
  );
};
