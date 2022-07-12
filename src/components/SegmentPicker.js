/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from "prop-types";
import propTypes from "@styled-system/prop-types";
import React, { useEffect, useState, useCallback } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
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
  segmentedControlBackgroundColor,
  activeSegmentBackgroundColor,
  activeTextColor,
  labelStyles,
  paddingVertical,
}) => {
  const translateValue = (width - 4) / tabs?.length;
  const [tabTranslate, setTabTranslate] = useState(new Animated.Value(0));

  // useCallBack with an empty array as input, which will call inner lambda only once and memoize the reference for future calls
  const memoizedTabPressCallback = useCallback(index => {
    onChange(index);
  }, []);

  useEffect(() => {
    // Animating the active index based current index
    Animated.spring(tabTranslate, {
      toValue: currentIndex * translateValue,
      stiffness: 180,
      damping: 20,
      mass: 1,
      useNativeDriver: true,
    }).start();
  }, [currentIndex]);

  const activeSegmentStyles = {
    ...StyleSheet.absoluteFill,
    position: "absolute",
    width: (width - 4) / tabs?.length,
    top: 0,
    marginVertical: 2,
    marginHorizontal: 2,
    backgroundColor: activeSegmentBackgroundColor,
    borderRadius: 8,
    ...shadow,
  };

  return (
    <Animated.View
      style={[
        styles.segmentedControlWrapper,
        {
          backgroundColor: segmentedControlBackgroundColor,
        },
      ]}
    >
      <Animated.View
        style={[
          activeSegmentStyles,
          {
            transform: [
              {
                translateX: tabTranslate,
              },
            ],
          },
        ]}
      ></Animated.View>
      {tabs.map((tab, index) => {
        const isCurrentIndex = currentIndex === index;
        return (
          <TouchableOpacity
            key={index}
            style={[styles.textWrapper, { paddingVertical: paddingVertical }]}
            onPress={() => memoizedTabPressCallback(index)}
            activeOpacity={0.7}
          >
            <Text
              numberOfLines={1}
              style={[
                styles.textStyles,
                labelStyles,
                isCurrentIndex && { color: activeTextColor },
              ]}
            >
              {tab}
            </Text>
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
  textWrapper: {
    flex: 1,
    elevation: 9,
    paddingHorizontal: 5,
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
   * Background for the inactive segments.
   */
  segmentedControlBackgroundColor: PropTypes.string,
  /**
   * Background for the active segment.
   */
  activeSegmentBackgroundColor: PropTypes.string,
  /**
   * Font style object for the labels in segment.
   */
  labelStyles: PropTypes.object,
  /**
   * Font color for the active segment.
   */
  activeTextColor: PropTypes.string,
  paddingVertical: PropTypes.number,
};

SegmentPicker.defaultProps = {
  tabs: [],
  onChange: () => {},
  currentIndex: 0,
  segmentedControlBackgroundColor: "#E5E5EA",
  activeSegmentBackgroundColor: "white",
  activeTextColor: "black",
  paddingVertical: 12,
  labelStyles: {
    color: "black",
  },
};
