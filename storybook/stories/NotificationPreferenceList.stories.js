import React, { useContext, useEffect, useState } from "react";
import Icon from "react-native-remix-icon";
import { ThemeContext } from "styled-components/native";

import { NotificationPreferenceList, Container } from "@components";

const NotificationPreferenceListMetaData = {
  title: "NotificationPreferenceList",
  component: NotificationPreferenceList,
};

export default NotificationPreferenceListMetaData;

export const NotificationPreferenceListComponent = () => {
  const [data, setData] = useState([]);
  const theme = useContext(ThemeContext);

  const handleSwitch = (item, index) => {
    setData(prevData => {
      const newData = [...prevData];
      newData[index].enabled = !newData[index].enabled;
      return newData;
    });
  };

  useEffect(() => {
    setData([
      {
        label: "Preference 1",
        enabled: true,
        onSwitch: handleSwitch,
      },
      {
        label: "Preference 2",
        enabled: true,
        onSwitch: handleSwitch,
      },
      {
        label: "Preference 3",
        enabled: false,
        onSwitch: handleSwitch,
      },
      {
        label: "Preference 4",
        enabled: false,
        onSwitch: handleSwitch,
      },
      {
        label: "Preference 5",
        enabled: false,
        onSwitch: handleSwitch,
        LeftIcon: () => (
          <Icon
            name="ri-notification-2-line"
            size={20}
            color={theme.colors.font.secondary}
          />
        ),
      },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      {data && <NotificationPreferenceList data={data} />}
    </Container>
  );
};
