import React, { useContext } from "react";
import PropTypes from "prop-types";
import Icon from "react-native-remix-icon";

import { Container } from "@components";
import { BottomSheet, Touchable, Typography } from "../..";
import { ThemeContext } from "styled-components/native";

/**
 *
 * <div class="screenshots">
 *   <img src="screenshots/optionsmenu/optionsmenu.png" />
 * </div>
 *
 * This component supports below props categories from [styled-system ](/styled-system).
 * <ul>
 * <li>flexbox</li>
 * <li>space</li>
 * <li>border</li>
 * <li>layout</li>
 * <li>color</li>
 * <li>buttonStyle</li>
 * </ul>
 *
 *  ## Usage
 * ```js
 * import * as React from "react";
 * import { Button, Container, OptionsMenu } from "@bigbinary/neetoui-rn";
 *
 * export default function Main() {
 *
 *  const [showOptions, setShowOptions] = React.useState(false);
 *  return (
 *    <Container flex={1} alignItems="center" justifyContent="center">
 *      <OptionsMenu
 *        hide={() => setShowOptions(false)}
 *        isVisible={showOptions}
 *        onDelete={() => {}}
 *        onEdit={() => {}}
 *        options={[
 *          {
 *          title: "Edit 2",
 *          iconName: "edit-2-line",
 *          onPress: () => {},
 *          },
 *          {
 *          title: "Remove",
 *          iconName: "delete-bin-4-line",
 *          onPress: () => {},
 *          },
 *        }]
 *        renderDefault={false}
 *      />
 *      <Button
 *        width={200}
 *        width={200}
 *        label="Show Options"
 *        onPress={() => {
 *        setShowOptions(true);
 *        }}
 *      />
 *    </Container>
 *  );
 * }
 * ```
 *
 */

const RenderOptions = ({
  containerProps,
  onPress,
  iconName,
  title,
  labelProps,
  variant,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <Touchable onPress={onPress}>
      <Container
        flexDirection="row"
        alignItems="center"
        py={10}
        {...containerProps}
      >
        <Icon
          size="20"
          color={
            variant === "danger"
              ? theme.colors.font.danger500
              : labelProps?.color ?? theme.colors.font.grey800
          }
          name={iconName}
        />
        <Typography
          fontFamily="sf400"
          color={
            variant === "danger" ? theme.colors.font.danger500 : "font.grey800"
          }
          fontSize="l"
          ml={14}
          {...labelProps}
        >
          {title}
        </Typography>
      </Container>
    </Touchable>
  );
};

export const OptionsMenu = ({
  isVisible,
  renderDefault,
  onEdit,
  onDelete,
  hide,
  options,
  containerProps,
}) => {
  const defaultOptions =
    renderDefault || !options?.length
      ? [
          {
            title: "Edit",
            iconName: "edit-2-line",
            onPress: onEdit,
          },
          {
            title: "Remove",
            iconName: "delete-bin-4-line",
            onPress: onDelete,
            variant: "danger",
          },
        ]
      : [];

  return (
    <Container>
      <BottomSheet isVisible={isVisible} hide={hide}>
        {[...defaultOptions, ...options].map(
          ({ iconName, labelProps, onPress, title, variant }, index) => (
            <RenderOptions
              key={index}
              iconName={iconName}
              labelProps={labelProps}
              onPress={onPress}
              title={title}
              containerProps={containerProps}
              variant={variant}
            />
          )
        )}
      </BottomSheet>
    </Container>
  );
};

OptionsMenu.defaultProps = {
  isVisible: false,
  renderDefault: true,
  onEdit: () => {},
  onDelete: () => {},
  hide: () => {},
  options: [],
  containerProps: {},
};

RenderOptions.propTypes = {
  onPress: PropTypes.func,
  iconName: PropTypes.string,
  title: PropTypes.string,
  labelProps: PropTypes.object,
  containerProps: PropTypes.object,
  variant: PropTypes.oneOf(["default", "danger"]),
};

RenderOptions.defaultOptions = {
  variant: "default",
};

OptionsMenu.propTypes = {
  isVisible: PropTypes.bool,
  renderDefault: PropTypes.bool,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  hide: PropTypes.func,
  options: PropTypes.array,
  containerProps: PropTypes.object,
};
