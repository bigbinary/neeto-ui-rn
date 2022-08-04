/* eslint-disable react/prop-types */
import React, { useCallback, useContext, useEffect } from "react";
import { FlashList as ShopifyFlashList } from "@shopify/flash-list";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import PropTypes from "prop-types";
import ContentLoader, { Rect } from "react-content-loader/native";
import { ThemeContext } from "styled-components/native";

const Placeholder = () => {
  const theme = useContext(ThemeContext);
  return (
    <ContentLoader
      height={68}
      width={400}
      viewBox="0 0 400 50"
      backgroundColor={theme.colors.lightgrey}
      foregroundColor={theme.colors.grey300}
    >
      <Rect x="0" y="8" width={400} height="70" />
    </ContentLoader>
  );
};

export const FlashList = ({
  durationPerItem = 200,
  SkeletonComponent,
  placeHolderItemCount = 10,
  isLoading = false,
  data = [],
  ...rest
}) => {
  const dummyData = Array.apply(null, Array(placeHolderItemCount));
  return (
    <FadeInFlatList
      durationPerItem={durationPerItem}
      SkeletonComponent={SkeletonComponent}
      isLoading={isLoading}
      extraData={{ isLoading }}
      data={isLoading ? dummyData : data}
      {...rest}
    />
  );
};

const FadeInFlatList = ({
  renderItem: originalRenderItem,
  initialDelay = 250,
  durationPerItem = 200,
  isLoading = false,
  SkeletonComponent,
  ...props
}) => {
  const value = useSharedValue(0);

  const FadeInComponent = useCallback(
    ({ index, children }) => {
      const inputRange =
        index === 0 ? [-1, 0, 1, 2] : [index - 1, index, index + 1, index + 2];

      const animatedStyles = useAnimatedStyle(() => {
        return {
          opacity: interpolate(
            value.value,
            inputRange,
            [0, 0, 1, 1],
            Extrapolation.CLAMP
          ),
          transform: [
            {
              translateX: interpolate(
                value.value,
                inputRange,
                [25, 15, 10, 0],
                Extrapolation.CLAMP
              ),
            },
          ],
        };
      });

      return <Animated.View style={animatedStyles}>{children}</Animated.View>;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const Item = useCallback(
    ({ item }) => {
      return item?.extraData?.isLoading ? (
        <FadeInComponent index={item.index}>
          {SkeletonComponent || <Placeholder />}
        </FadeInComponent>
      ) : item.index === 0 ? (
        originalRenderItem(item)
      ) : (
        <FadeInComponent index={item.index}>
          {originalRenderItem(item)}
        </FadeInComponent>
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const renderItem = useCallback(item => {
    return <Item item={item} />;
  }, []);

  useEffect(() => {
    value.value = 0;
    value.value = withDelay(
      initialDelay,
      withTiming(props.data.length + 1, {
        duration: props.data.length * durationPerItem,
      })
    );
  }, [props.data.length, durationPerItem, initialDelay, value, isLoading]);

  return <ShopifyFlashList {...props} renderItem={renderItem} />;
};

FlashList.propTypes = {
  SkeletonComponent: PropTypes.element,
  durationPerItem: PropTypes.number,
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  placeHolderItemCount: PropTypes.number,
};
