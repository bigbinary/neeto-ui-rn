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

/**
 * RichTextEditor component is wrapper created around react-native-pell-rich-editor. This has dependency on react-native-webview, so make sure to add that as well.
 *
 *  ## Usage
 * ```js
 * import * as React from "react";
 * import { Container, RichTextEditor } from "@components";
 * import { theme } from "@theme";
 *
 * export default function Main() {
 * const [message, setMessage] = React.useState('');
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
 *     <RichTextEditor
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
          {...editorProps}
        />

        {children}
      </ScrollView>
      {showToolbar && (
        <Container bottom={keyboardHeight} {...rest?.toolbarWrapperStyle}>
          <RichToolbar
            editor={richTextRef}
            actions={computeToolbarActions()}
            {...toolBarProps}
          />
        </Container>
      )}
    </>
  );
};

RichTextEditor.defaultProps = {
  editorProps: {},
  toolBarProps: {},
};

RichTextEditor.propTypes = {
  /**
   * Callback that is called when the text input's text changes.
   */
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
  /**
   * Placeholder for the input.
   */
  placeholderText: PropTypes.string,
  /**
   * An array of actions to be provided by this toolbar. Check react-native-pell-rich-editor for list of supported actions.
   */
  toolbarActions: PropTypes.array.isRequired,
  /**
   * Object which can be used to pass other supported props by the Editor.
   */
  editorProps: PropTypes.object,
  /**
   * Object which can be used to pass other supported props by the RichToolbar.
   */
  toolBarProps: PropTypes.object,
};
