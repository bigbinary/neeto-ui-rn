import React, { useState } from "react";
import { ScrollView } from "react-native";

import { Container, RichTextEditor, Typography } from "@components";
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
      <ScrollView style={{ flex: 1, backgroundColor: "red" }}>
        <Container>
          <Typography>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. Why do we use it? It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like). Where does it come from?
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32
          </Typography>
        </Container>
      </ScrollView>
      <RichTextEditor
        inline
        attachments={attachments}
        borderStyle={borderStyle}
        editorProps={editorProps}
        editorWrapperStyle={{ minHeight: 150, maxHeight: 250 }}
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
