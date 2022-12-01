import React from "react";

import { Container, RichTextEditor } from "@components";
import { theme } from "@theme";

const RichTextEditorStories = {
  title: "Rich Text Editor",
};

export default RichTextEditorStories;

export const RichTextEditorComponent = () => {
  const editorProps = {
    initialContentHTML: "Rich Text Component...",
    initialFocus: true,
    editorStyle: {
      color: theme.colors.font.grey,
    },
  };

  const toolBarProps = {};

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
        toolBarProps={toolBarProps}
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
