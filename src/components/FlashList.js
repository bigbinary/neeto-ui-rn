/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import { FlashList as ShopifyFlashList } from "@shopify/flash-list";

export const FlashList = ({ durationPerItem = 200, data = [], ...rest }) => {
  return (
    <FadeInFlatList durationPerItem={durationPerItem} data={data} {...rest} />
  );
};

const FadeInFlatList = ({
  renderItem: originalRenderItem,
  initialDelay = 500,
  durationPerItem = 200,
  data = [],
  ...props
}) => {
  const value = useRef(new Animated.Value(0));

  const FadeInComponent = useCallback(({ index, children }) => {
    return (
      <Animated.View
        style={{
          opacity: value.current.interpolate({
            inputRange:
              index === 0
                ? [-1, 0, 1, 2]
                : [index - 1, index, index + 1, index + 2],
            outputRange: [0, 0, 1, 1],
            extrapolate: "clamp",
          }),
        }}
      >
        {children}
      </Animated.View>
    );
  }, []);

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
    value.current.setValue(0);

    Animated.timing(value.current, {
      toValue: data.length + 1,
      delay: initialDelay,
      useNativeDriver: false,
      duration: data.length * durationPerItem,
      easing: Easing.linear,
    }).start();
  }, [initialDelay, durationPerItem, data.length]);

  return <ShopifyFlashList {...props} data={data} renderItem={renderItem} />;
};

export default FadeInFlatList;
