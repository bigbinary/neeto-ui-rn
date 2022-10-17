import React from "react";
import PropTypes from "prop-types";

import { Container, Typography, Divider, ToggleSwitch } from "@components";

/**
 *
 * Buttons are touchable elements used to interact with the screen and to trigger an action.
 *
 * <div class="screenshots">
 *   <img src="screenshots/notificationPreferenceList/notificationPreferenceList.png" />
 * </div>
 *
 *  ## Usage
 * ```js
 * import * as React from 'react';
 * import { Container, NotificationPreferenceList } from '@bigbinary/neetoui-rn';
 *
 * export default function Main() {
 *  const [data, setData] = useState([]);
 * 
 *  const handleSwitch = (item, index) => {
 *    setData(prevData => {
 *      const newData = [...prevData];
 *      newData[index].enabled = !newData[index].enabled;
 *      return newData;
 *    });
 *  };

 *  useEffect(() => {
 *    setData([
 *      {
 *        label: "Preference 1",
 *        enabled: true,
 *        onSwitch: handleSwitch,
 *      },
 *      {
 *        label: "Preference 2",
 *        enabled: true,
 *        onSwitch: handleSwitch,
 *      },
 *      {
 *        label: "Preference 3",
 *        enabled: false,
 *        onSwitch: handleSwitch,
 *      },
 *      {
 *        label: "Preference 4",
 *        enabled: false,
 *        onSwitch: handleSwitch,
 *      },
 *      {
 *        label: "Preference 5",
 *        enabled: false,
 *        onSwitch: handleSwitch,
 *        LeftIcon: () => (
 *          <Icon
 *            name="ri-notification-2-line"
 *            size={20}
 *            color={theme.colors.font.secondary}
 *          />
 *        ),
 *      },
 *    ]);
 *  }, []);

 *  return (
 *    <Container flex={1} alignItems="center" justifyContent="center">
 *      {data && <NotificationPreferenceList data={data} />}
 *    </Container>
 *  );
 * }
 * ```
 *
 */

export const NotificationPreferenceList = ({
  data,
  itemWrapperProps,
  itemContainerProps,
  labelContainerProps,
  labelProps,
  ...rest
}) => {
  return (
    <Container bg="background.secondary" borderRadius={8} {...rest}>
      {data?.map((item, index) => {
        const { label, enabled, onSwitch, LeftIcon } = item;
        const isLastItem = index === data.length - 1;
        return (
          <Container key={index} px={12} {...itemWrapperProps}>
            <Container
              py={15}
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              {...itemContainerProps}
            >
              <Container
                flexDirection="row"
                alignItems="center"
                width="85%"
                pr={15}
                {...labelContainerProps}
              >
                {LeftIcon && (
                  <Container mr={10}>
                    <LeftIcon />
                  </Container>
                )}
                <Typography
                  color="font.grey800"
                  fontSize="l"
                  fontFamily="sf400"
                  {...labelProps}
                >
                  {label}
                </Typography>
              </Container>
              <ToggleSwitch
                value={enabled}
                onValueChange={() => onSwitch(item, index)}
                mt={4}
              />
            </Container>
            {!isLastItem && <Divider bg="background.grey300" />}
          </Container>
        );
      })}
    </Container>
  );
};

NotificationPreferenceList.propTypes = {
  /**
   * Array of preference list
   */
  data: PropTypes.array.isRequired,
  /**
   * Customize outer container for each item
   */
  itemWrapperProps: PropTypes.object,
  /**
   * Customize inner container for each item
   */
  itemContainerProps: PropTypes.object,
  /**
   * Customize container for each item label
   */
  labelContainerProps: PropTypes.object,
  /**
   * Customize item label
   */
  labelProps: PropTypes.object,
};
