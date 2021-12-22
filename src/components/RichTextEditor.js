import React, { useRef, useState } from "react";
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

/**
 * RichTextEditor component is wrapper created around react-native-pell-rich-editor. This has dependency on react-native-webview, so make sure add that as well.
 *
 *  ## Usage
 * ```js
 * import React, {useState} from "react";
 * import { Container, RichTextEditor } from "@components";
 * import { theme } from "@theme";
 * 
 * export default function Main() {
 * const [message, setMessage] = useState('');
 * 
 * const editorProps = {
 *   initialContentHTML: "Rich Text Component...",
 *   initialFocus: true,
 *   editorStyle: {
 *     color: theme.colors.font.grey,
 *   },
 * };
 * 
 * return (
 *   <Container flex={1}>
 *     <RichTextEditor*
 *       onChange={setMessage}
 *       toolbarActions={[
 *         "keyboard",
 *         "setBold",
 *         "setItalic",
 *         "insertBulletsList",
 *         "insertOrderedList",
 *         "setStrikethrough",
 *         "setUnderline",
 *         "undo",
 *         "redo",
 *       ]}
 *       toolbarWrapperStyle={{bottom: 0}}
 *       editorProps={editorProps}
 *       toolBarProps={{}}
 *     />
 *   </Container>
 *  );
 * };
 *
 * ```
 */

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

  const computeToolbarActions = () => {
    const actionItems = [];
    toolbarActions?.map(actionItem => {
      actionItems.push(actions[actionItem]);
    });

    return actionItems;
  };
  const editorPropsReceived = { ...editorProps };

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
          {...editorPropsReceived}
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
