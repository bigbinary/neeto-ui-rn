import PropTypes from "prop-types";
import propTypes from "@styled-system/prop-types";
import React, { useEffect, useCallback, useContext } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { ThemeContext } from "styled-components/native";

const defaultShadowStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
};

// eslint-disable-next-line neeto/no-dangling-constants
const DEFAULT_SPRING_CONFIG = {
  stiffness: 150,
  damping: 20,
  mass: 1,
  overshootClamping: false,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
};

// So that it stretches in landscape mode.
const width = Dimensions.get("screen").width - 32;

/**
 *
 * A Segment Picker component that provides toggling between two or more views.
 *
 * <div class="screenshots">
 *   <img src="screenshots/segmentPicker/segmentpickers.png" />
 * </div>
 *
 *   ## Usage
 * ```js
 * import * as React from 'react';
 * import { Container, SegmentPicker } from '@bigbinary/neetoui-rn';
 *
 * export default function Main(){
 *   const [tabIndex, setTabIndex] = useState(1);
 *
 *  return (
 *    <Container flex={1} alignItems="center" justifyContent="center">
 *      <Container my={3}>
 *        <SegmentPicker
 *          tabs={["On", "Off"]}
 *          currentIndex={tabIndex}
 *          onChange={setTabIndex}
 *        />
 *      </Container>
 *    </Container>
 *  );
 * }
 * ```
 */

export const SegmentPicker = ({
  tabs,
  onChange,
  currentIndex,
  inactiveSegmentStyle,
  activeSegmentStyle,
  activeTextStyle,
  inactiveTextStyle,
  paddingVertical,
}) => {
  const translateValue = (width - 4) / tabs?.length;
  const tabTranslateValue = useSharedValue(0);
  const theme = useContext(ThemeContext);

  // useCallBack with an empty array as input, which will call inner lambda only once and memoize the reference for future calls
  const memoizedTabPressCallback = useCallback(
    index => {
      onChange(index);
    },
    [onChange]
  );

  useEffect(() => {
    tabTranslateValue.value = withSpring(
      currentIndex * (translateValue * 1),
      DEFAULT_SPRING_CONFIG
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const finalisedActiveTextStyle = {
    fontSize: theme.fontSizes.m,
    textAlign: "center",
    color: theme.colors.font.grey800,
    fontFamily: theme.fonts.sf500,
    ...activeTextStyle,
  };

  const finalisedInActiveTextStyle = {
    fontSize: theme.fontSizes.m,
    textAlign: "center",
    color: theme.colors.font.grey800,
    fontFamily: theme.fonts.sf500,
    ...inactiveTextStyle,
  };

  const tabTranslateAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabTranslateValue.value }],
    };
  });

  return (
    <Animated.View
      style={[styles.defaultSegmentedControlWrapper, inactiveSegmentStyle]}
    >
      <Animated.View
        style={[
          styles.movingSegmentStyle,
          activeSegmentStyle,
          defaultShadowStyle,
          StyleSheet.absoluteFill,
          {
            width: width / tabs?.length,
          },
          tabTranslateAnimatedStyles,
        ]}
      />

      {tabs.map((tab, index) => {
        const isCurrentIndex = currentIndex === index;
        return (
          <TouchableOpacity
            key={index}
            style={[styles.textWrapper, { paddingVertical: paddingVertical }]}
            onPress={() => memoizedTabPressCallback(index)}
            activeOpacity={0.7}
          >
            <View style={styles.textWrapper}>
              <Text
                style={
                  isCurrentIndex
                    ? finalisedActiveTextStyle
                    : finalisedInActiveTextStyle
                }
              >
                {tab}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  segmentedControlWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    width: width,
  },
  defaultSegmentedControlWrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#E5E5EA",
    width: width,
  },
  movingSegmentStyle: {
    top: 0,
    marginVertical: 2,
    marginHorizontal: 2,
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
  },
  textWrapper: {
    flex: 1,
    elevation: 9,
  },
  textStyles: {
    fontSize: 13,
    textAlign: "center",
    fontWeight: "600",
  },
});

SegmentPicker.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.space,
  ...propTypes.border,
  ...propTypes.layout,
  ...propTypes.color,
  /**
   * Array of texts for the labels of each Segment/Tab.
   */
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Callback called with the new value when it changes.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Index value of the currently selected Segment/Tab.
   */
  currentIndex: PropTypes.number.isRequired,
  /**
   * To change the inactive segment container style.
   */
  inactiveSegmentStyle: PropTypes.object,
  /**
   * To change the active segment container style.
   */
  activeSegmentStyle: PropTypes.object,
  /**
   * To change the inactive segment font style.
   */
  inactiveTextStyle: PropTypes.object,
  /**
   * To change the active segment font style.
   */
  activeTextStyle: PropTypes.object,
  paddingVertical: PropTypes.number,
};

SegmentPicker.defaultProps = {
  tabs: [],
  onChange: () => {},
  currentIndex: 0,
  paddingVertical: 12,
};
