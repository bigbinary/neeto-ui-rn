import React from "react";

import { Container, RichTextEditor } from "@components";
import { theme } from "@theme";

const RichTextEditorStories = {
  title: "Rich Text Editor",
};

export default RichTextEditorStories;

export const RichTextEditorComponent = () => {
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

  return (
    <Container flex={1}>
      <RichTextEditor
        borderStyle={borderStyle}
        editorProps={editorProps}
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
        onChange={() => {}}
      />
    </Container>
  );
};
