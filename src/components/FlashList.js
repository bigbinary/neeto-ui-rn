/* eslint-disable react/prop-types */
import React, { useCallback, useContext, useEffect } from "react";
import { FlashList as ShopifyFlashList } from "@shopify/flash-list";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import PropTypes from "prop-types";
import ContentLoader, { Rect } from "react-content-loader/native";
import { ThemeContext } from "styled-components/native";
import { Dimensions, RefreshControl } from "react-native";

import { useRefreshByUser } from "@hooks";

const { width } = Dimensions.get("screen");
const Placeholder = () => {
  const theme = useContext(ThemeContext);
  return (
    <ContentLoader
      marginHorizontal={15}
      height="60"
      width={400}
      viewBox="0 0 400 50"
      backgroundColor={theme.colors.lightgrey}
      foregroundColor={theme.colors.grey300}
    >
      <Rect x="0" rx="5" ry="5" width={width - 30} height="50" />
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
  durationPerItem = 200,
  isLoading = false,
  SkeletonComponent,
  ...props
}) => {
  const value = useSharedValue(0);

  const FadeInComponent = useCallback(
    ({ index, children }) => {
      const inputRange = [index - 1, index, index + 1, index + 2];
      const animatedStyles = useAnimatedStyle(() => {
        return {
          opacity: interpolate(
            value.value,
            inputRange,
            [0, 0.6, 1, 1],
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
    value.value = withTiming(props.data.length + 1, {
      duration: props.data.length * durationPerItem,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [durationPerItem, value, isLoading]);

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
