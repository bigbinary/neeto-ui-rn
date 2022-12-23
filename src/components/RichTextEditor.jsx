import React, { useEffect, useRef, useState } from "react";

import PropTypes from "prop-types";
import {
  RichEditor,
  RichToolbar,
  actions,
} from "react-native-pell-rich-editor";
import Icon from "react-native-remix-icon";
import styled from "styled-components/native";
import { space, flexbox, border, layout } from "styled-system";

import { Container, Typography, Touchable } from "@components";
import { useKeyboard } from "@hooks";

import { AttachmentList } from "./AttachmentList";

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
  errorMessage,
  onChange,
  placeholderText,
  toolbarActions,
  toolbarProps,
  toolbarStyle,
  onSend,
  attachments,
  onAttachment,
  onDelete,
  alwaysShowToolbar,
  inline,
  ...rest
}) => {
  const richTextRef = useRef();
  const keyboardHeight = useKeyboard();
  const [toolbarVisible, setToolbarVisible] = useState(false);
  const showToolbar =
    (keyboardHeight > 0 && toolbarVisible) || alwaysShowToolbar;

  useEffect(() => {
    if (editorProps?.ref) throw Error("ref is not allowed in editorprops");
  }, []);

  const computeToolbarActions = () => {
    const actionItems = [];

    Object.keys(toolbarProps.iconMap).forEach(key => {
      actionItems.push(key);
    });
    actionItems.push("attachment");

    toolbarActions?.map(actionItem => {
      actionItems.push(actions[actionItem]);
    });

    if (onSend && !inline) {
      actionItems.push("onSend");
    }

    return actionItems;
  };

  const combinedEditorProps = {
    ...editorProps,
    containerStyle: {
      borderRadius: borderStyle.borderRadius,
    },
  };

  return (
    <>
      <Container alignItems="center" flexDirection="row">
        <Container
          {...borderStyle}
          flex={1}
          overflow="hidden"
          pd={8}
          borderColor={
            !errorMessage ? borderStyle.borderColor : theme.colors.border.danger
          }
        >
          <ScrollView>
            <Container flex={1} {...rest?.editorWrapperStyle}>
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
            </Container>
          </ScrollView>
          {attachments.length > 0 && (
            <AttachmentList attachments={attachments} onDelete={onDelete} />
          )}
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
              attachment={onAttachment}
              iconMap={{
                ...toolbarProps.iconMap,
                ["onSend"]: data => (
                  <Icon
                    color={data.tintColor}
                    name="send-plane-2-fill"
                    size={20}
                  />
                ),
                ["attachment"]: data => (
                  <Icon
                    color={data.tintColor}
                    name="attachment-line"
                    size={20}
                  />
                ),
              }}
              onSend={onSend}
            />
          )}
        </Container>
        <Container>
          {onSend && inline && (
            <Touchable
              hitSlop={{ top: 5, right: 5, bottom: 5, left: 5 }}
              px={2}
              onPress={onSend}
            >
              <Icon
                color={theme.colors.font.grey500}
                name="send-plane-2-fill"
                size={20}
              />
            </Touchable>
          )}
        </Container>
      </Container>
      {!!errorMessage && (
        <Typography color="font.danger" pt={2}>
          {errorMessage}
        </Typography>
      )}
      {children}
    </>
  );
};

RichTextEditor.defaultProps = {
  placeholderText: "Type here...",
  editorProps: {},
  errorMessage: null,
  borderStyle: {
    borderRadius: 8,
    borderColor: theme.colors.border.grey400,
    borderStyle: "solid",
    borderWidth: 1,
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
  iconMap: PropTypes.object,
  attachments: [],
  inline: false,
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
   * Prop to pass string value of error message to be shown.
   */
  errorMessage: PropTypes.string,
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

  /**
   * callback for the send action
   */
  onSend: PropTypes.func,

  /**
   * Array of attachments
   */
  attachments: PropTypes.array,
  /**
   * callback when attachment icon is pressed
   */
  onAttachment: PropTypes.func,
  /**
   * callback to delete an attachment
   */
  onDelete: PropTypes.func,
  /**
   * flag to show the send button inline with editor
   */
  inline: PropTypes.bool,
  /**
   * flag to always show toolbar
   */
  alwaysShowToolbar: PropTypes.bool,
};
