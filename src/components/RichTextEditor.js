import React, { useRef, useEffect, useState } from "react";
import {
  RichEditor,
  RichToolbar,
  actions,
} from "react-native-pell-rich-editor";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { space, flexbox, border, layout } from "styled-system";

import { useKeyboard } from "@hooks";
import { Container } from "@components";

export const ScrollView = styled.ScrollView.attrs(() => ({
  keyboardShouldPersistTaps: "handled",
  showsVerticalScrollIndicator: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { flexGrow: 1 },
}))`
  ${space}
  ${flexbox}
  ${border}
  ${layout}
`;

export const RichTextEditor = ({
  onChange,
  placeholderText,
  children,
  toolbarActions,
  editorProps,
  toolBarProps,
  ...rest
}) => {
  const richTextRef = useRef();
  const keyboardHeight = useKeyboard();
  const [toolbarVisible, setToolbar] = useState(true);
  const showToolbar = keyboardHeight > 0 && toolbarVisible;

  useEffect(() => {
    richTextRef.current.setContentHTML("");
  }, []);

  const computeToolbarActions = () => {
    const actionItems = [];
    toolbarActions?.map(actionItem => {
      actionItems.push(actions[actionItem]);
    });

    return actionItems;
  };

  return (
    <>
      <ScrollView {...rest?.editorWrapperStyle}>
        <RichEditor
          placeholder={placeholderText || "Type here..."}
          ref={richTextRef}
          onChange={onChange}
          useContainer={false}
          onFocus={() => {
            setToolbar(true);
            editorProps?.onFocusFn();
          }}
          onBlur={() => {
            setToolbar(false);
            editorProps?.onBlurFn();
          }}
          {...(editorProps && { ...editorProps })}
        />

        {children}
      </ScrollView>
      {showToolbar && (
        <Container bottom={keyboardHeight} {...rest?.toolbarWrapperStyle}>
          <RichToolbar
            editor={richTextRef}
            actions={computeToolbarActions()}
            {...(toolBarProps && { ...toolBarProps })}
          />
        </Container>
      )}
    </>
  );
};

RichTextEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
  placeholderText: PropTypes.string,
  toolbarActions: PropTypes.array.isRequired,
  editorProps: PropTypes.object,
  toolBarProps: PropTypes.object,
};
