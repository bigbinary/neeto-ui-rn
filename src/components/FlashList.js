/* eslint-disable react/prop-types */
import React, { useCallback, useEffect } from "react";
import { FlashList as ShopifyFlashList } from "@shopify/flash-list";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

export const FlashList = ({ durationPerItem = 200, data = [], ...rest }) => {
  return (
    <FadeInFlatList durationPerItem={durationPerItem} data={data} {...rest} />
  );
};

const FadeInFlatList = ({
  renderItem: originalRenderItem,
  initialDelay = 300,
  durationPerItem = 200,
  data = [],
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

  const Item = useCallback(({ info }) => {
    return (
      <FadeInComponent index={info.index}>
        {originalRenderItem(info)}
      </FadeInComponent>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = useCallback(info => {
    return <Item info={info} />;
  }, []);

  useEffect(() => {
    value.value = withDelay(
      initialDelay,
      withTiming(data.length + 1, {
        duration: data.length * durationPerItem,
      })
    );
  }, [data.length, durationPerItem, initialDelay, value]);

  return <ShopifyFlashList {...props} data={data} renderItem={renderItem} />;
};

export default FadeInFlatList;
