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
import { RefreshControl } from "react-native";

import { useRefreshByUser } from "@hooks";

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
  onRefresh = () => {},
  onEndReached = () => {},
  keyExtractor,
  ...rest
}) => {
  const dummyData = Array.apply(null, Array(placeHolderItemCount));

  const { isRefetchingByUser, refetchByUser } = useRefreshByUser(onRefresh);

  return (
    <FadeInFlatList
      key={isLoading}
      durationPerItem={durationPerItem}
      SkeletonComponent={SkeletonComponent}
      isLoading={isLoading}
      extraData={{ isLoading, placeHolderItemCount }}
      data={isLoading ? dummyData : data}
      refreshControl={
        onRefresh && (
          <RefreshControl
            refreshing={isRefetchingByUser}
            onRefresh={refetchByUser}
          />
        )
      }
      placeHolderItemCount={placeHolderItemCount}
      keyExtractor={(item, index) => {
        return isLoading || !keyExtractor
          ? index.toString()
          : keyExtractor(item, index);
      }}
      {...rest}
      onEndReached={isLoading ? undefined : onEndReached}
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

  const Item = ({ item }) => {
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
  };

  const renderItem = item => {
    return isLoading || item.index < props.placeHolderItemCount ? (
      <Item item={item} />
    ) : (
      originalRenderItem(item)
    );
  };

  useEffect(() => {
    value.value = 0;
    value.value = withDelay(
      initialDelay,
      withTiming(props.data.length + 1, {
        duration: props.data.length * durationPerItem,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [durationPerItem, initialDelay, value, isLoading]);

  return <ShopifyFlashList {...props} renderItem={renderItem} />;
};

FlashList.propTypes = {
  SkeletonComponent: PropTypes.element,
  durationPerItem: PropTypes.number,
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  placeHolderItemCount: PropTypes.number,
  onRefresh: PropTypes.func,
  onEndReached: PropTypes.func,
  keyExtractor: PropTypes.func,
};
