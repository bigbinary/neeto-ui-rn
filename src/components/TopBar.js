import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { Container, Touchable, Typography } from "@components";
import { theme } from "@theme";

/**
 *
 * Buttons are touchable elements used to interact with the screen and to trigger an action.
 *
 * <div class="screenshots">
 *   <img src="screenshots/toptabbar/toptabbar-1.png" />
 *   <img src="screenshots/toptabbar/toptabbar-2.png" />
 * </div>
 *
 *  ## Usage
 * ```js
 * import * as React, { useEffect, useState } from 'react';
 * import { Button, TopBar } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  const [activeTab, setActiveTab] = useState(0);
 *
 *  useEffect(() => {
 *    console.log("Active tab is ", itemList[activeTab]);
 *  }, [activeTab]);
 *
 *  return (
 *    <>
 *      <TopBar
 *        data={itemList}
 *        activeIndex={activeTab}
 *        onActiveTabChange={index => {
 *          setActiveTab(index);
 *        }}
 *      />
 *
 *      <Button label="Switch to `Expired` tab" onPress={() => setActiveTab(2)} />
 *    </>
 *  );
 * }
 * ```
 *
 */

export const TopBar = ({
  data,
  activeIndex = 0,
  onActiveTabChange = () => {},
  activeTabTextStyle,
  activeTabContainerStyle,
  inActiveTabTextStyle,
  inActiveTabContainerStyle,
  tabContainerStyle,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(activeIndex);

  useEffect(() => {
    onActiveTabChange(selectedIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex]);

  useEffect(() => {
    setSelectedIndex(activeIndex);
  }, [activeIndex]);

  return (
    <Container
      height={50}
      style={[styles.defaultTabContainerStyle, tabContainerStyle]}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <Touchable
            key={index}
            onPress={() => setSelectedIndex(index)}
            style={
              selectedIndex === index
                ? {
                    ...styles.defaultActiveContainerStyle,
                    ...activeTabContainerStyle,
                  }
                : {
                    ...styles.defaultInActiveTabContainerStyle,
                    ...inActiveTabContainerStyle,
                  }
            }
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              style={
                selectedIndex === index
                  ? {
                      ...styles.defaultActiveTabTextStyle,
                      ...activeTabTextStyle,
                    }
                  : {
                      ...styles.defaultInActiveTabTextStyle,
                      ...inActiveTabTextStyle,
                    }
              }
            >
              {item}
            </Typography>
          </Touchable>
        ))}
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  defaultActiveContainerStyle: {
    backgroundColor: theme.colors.background.grey800,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  defaultInActiveTabContainerStyle: {
    backgroundColor: theme.colors.background.white,
    marginHorizontal: 20,
  },
  defaultActiveTabTextStyle: {
    color: theme.colors.font.white,
  },
  defaultInActiveTabTextStyle: {
    color: theme.colors.font.grey800,
  },
  defaultTabContainerStyle: {
    backgroundColor: theme.colors.font.white,
  },
});

TopBar.propTypes = {
  data: PropTypes.array.isRequired,
  activeIndex: PropTypes.number,
  onActiveTabChange: PropTypes.func.isRequired,
  activeTabTextStyle: PropTypes.object,
  activeTabContainerStyle: PropTypes.object,
  inActiveTabTextStyle: PropTypes.object,
  inActiveTabContainerStyle: PropTypes.object,
  tabContainerStyle: PropTypes.object,
};
