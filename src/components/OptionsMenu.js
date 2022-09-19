import React, { useContext } from "react";
import PropTypes from "prop-types";
import Icon from "react-native-remix-icon";

import { Container } from "@components";
import { BottomSheet, Touchable, Typography } from "../..";
import { ThemeContext } from "styled-components/native";

const RenderOptions = ({
  containerProps,
  onPress,
  icon,
  title,
  labelProps,
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
          color={labelProps?.color ?? theme.colors.font.grey800}
          name={icon}
        />
        <Typography
          fontFamily="sf400"
          color="font.grey800"
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
  onEditPress,
  onDeletePress,
  hide,
  options,
  containerProps,
}) => {
  const theme = useContext(ThemeContext);

  const defaultOptions =
    renderDefault || !options?.length
      ? [
          {
            title: "Edit",
            icon: "edit-2-line",
            onPress: onEditPress,
          },
          {
            title: "Remove",
            icon: "delete-bin-4-line",
            onPress: onDeletePress,
            labelProps: { color: theme.colors.font.danger500 },
          },
        ]
      : [];

  return (
    <Container>
      <BottomSheet isVisible={isVisible} hide={hide}>
        {[...defaultOptions, ...options].map(
          ({ icon, labelProps, onPress, title }, index) => (
            <RenderOptions
              key={index}
              icon={icon}
              labelProps={labelProps}
              onPress={onPress}
              title={title}
              containerProps={containerProps}
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
  onEditPress: () => {},
  onDeletePress: () => {},
  hide: () => {},
  options: [],
  containerProps: {},
};
RenderOptions.propTypes = {
  onPress: PropTypes.func,
  icon: PropTypes.string,
  title: PropTypes.string,
  labelProps: PropTypes.object,
  containerProps: PropTypes.object,
};

OptionsMenu.propTypes = {
  isVisible: PropTypes.bool,
  renderDefault: PropTypes.bool,
  onEditPress: PropTypes.func,
  onDeletePress: PropTypes.func,
  hide: PropTypes.func,
  options: PropTypes.array,
  containerProps: PropTypes.object,
};
