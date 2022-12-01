import React, { useRef, useState } from "react";

import PropTypes from "prop-types";
import {
  RichEditor,
  RichToolbar,
  actions,
} from "react-native-pell-rich-editor";
import styled from "styled-components/native";
import { space, flexbox, border, layout } from "styled-system";

import { Container } from "@components";
import { useKeyboard } from "@hooks";

import { theme } from "../theme";

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
 *
 * <div class="screenshots">
 *   <img src="screenshots/rte/rte.png" />
 * </div>
 *
 *  ## Usage
 * ```js
 * import * as React from "react";
 * import { Container, RichTextEditor, theme } from "@bigbinary/neetoui-rn";
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
 *       editorProps={editorProps}
 *     />
 *   </Container>
 *  );
 * };
 *
 * ```
 */

export const RichTextEditor = ({
  borderStyle,
  children,
  editorProps,
  onChange,
  placeholderText,
  toolbarActions,
  toolbarProps,
  toolbarStyle,
  ...rest
}) => {
  const richTextRef = useRef();
  const keyboardHeight = useKeyboard();
  const [toolbarVisible, setToolbarVisible] = useState(false);
  const showToolbar = keyboardHeight > 0 && toolbarVisible;
  const defaultBorderStyle = RichTextEditor.defaultProps.borderStyle;

  const computeToolbarActions = () => {
    const actionItems = [];
    toolbarActions?.map(actionItem => {
      actionItems.push(actions[actionItem]);
    });

    return actionItems;
  };

  const combinedEditorProps = {
    ...editorProps,
    containerStyle: {
      borderRadius: borderStyle.radius ?? defaultBorderStyle.radius,
      overflow: "hidden",
    },
  };

  return (
    <ScrollView {...rest?.editorWrapperStyle}>
      <Container
        borderColor={borderStyle.color ?? defaultBorderStyle.color}
        borderRadius={borderStyle.radius ?? defaultBorderStyle.radius}
        borderStyle={borderStyle.style ?? defaultBorderStyle.style}
        borderWidth={borderStyle.width ?? defaultBorderStyle.width}
        flex={1}
        pd={8}
      >
        <RichEditor
          androidLayerType="software"
          placeholder={placeholderText}
          ref={richTextRef}
          useContainer={false}
          onChange={onChange}
          onBlur={() => {
            setToolbarVisible(false);
            editorProps?.onBlurFn();
          }}
          onFocus={() => {
            setToolbarVisible(true);
            editorProps?.onFocusFn();
          }}
          {...combinedEditorProps}
        />
        {showToolbar && (
          <RichToolbar
            actions={computeToolbarActions()}
            editor={richTextRef}
            style={{
              ...RichTextEditor.defaultProps.toolbarStyle,
              ...toolbarStyle,
            }}
            {...RichTextEditor.defaultProps.toolbarProps}
            {...toolbarProps}
          />
        )}
      </Container>
      {children}
    </ScrollView>
  );
};

RichTextEditor.defaultProps = {
  placeholderText: "Type here...",
  editorProps: {},
  borderStyle: {
    radius: 8,
    color: "transparent",
    style: "solid",
    width: 1,
  },
  toolbarProps: {
    selectedIconTint: theme.buttons.solid.backgroundColor,
  },
  toolbarWrapperStyle: {},
  toolbarStyle: {
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: theme.colors.border.primary,
  },
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
  toolbarProps: PropTypes.object,
  editorWrapperStyle: PropTypes.object,
  toolbarWrapperStyle: PropTypes.object,
  /**
   * Object which can be used to style border of the editor.
   */
  borderStyle: PropTypes.object,
  /**
   * Object which can be used to style toolbar container.
   */
  toolbarStyle: PropTypes.object,
};
