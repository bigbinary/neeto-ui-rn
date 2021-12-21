import React from "react";
import { Container, RichTextEditor } from "@components";
import { theme } from "@theme";

const RichTextEditorStories = {
  title: "Rich Text Editor",
};

export default RichTextEditorStories;

export const RichTextEditorsComponent = () => {
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

  return (
    <Container flex={1}>
      <RichTextEditor
        onChange={() => {}}
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
        toolbarWrapperStyle={toolbarWrapperStyle}
        editorProps={editorProps}
        toolBarProps={toolBarProps}
      />
    </Container>
  );
};
