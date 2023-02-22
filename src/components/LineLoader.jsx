import React, { useContext } from "react";

import PropTypes from "prop-types";
import ContentLoader, { Rect } from "react-content-loader/native";
import { moderateScale } from "react-native-size-matters";
import { ThemeContext } from "styled-components/native";

export const LineLoader = ({ isLoading, height = moderateScale(1.5) }) => {
  const theme = useContext(ThemeContext);

  return (
    <ContentLoader
      animate={isLoading}
      foregroundColor={theme.colors.background.base}
      height={height}
      interval={0}
      key={Boolean(isLoading)}
      speed={1}
      width="100%"
      backgroundColor={
        isLoading
          ? theme.colors.background.secondary
          : theme.colors.background.primary
      }
    >
      <Rect height={height} width="100%" x={0} y={0} />
    </ContentLoader>
  );
};

LineLoader.propTypes = {
  isLoading: PropTypes.bool,
  height: PropTypes.number,
};
