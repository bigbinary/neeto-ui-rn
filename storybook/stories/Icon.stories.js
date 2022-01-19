import React from "react";
import { Container, Icon } from "@components";

const IconStories = {
  title: "Icon",
};

export default IconStories;

export const Icons = () => {
  const renderIcon = (name, size, color) => {
    return (
      <Container mx={3}>
        <Icon name={name} size={size} color={color} />
      </Container>
    );
  };

  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Container my={3} flexDirection="row">
        {renderIcon("ri-government-line", 20, "grey")}
        {renderIcon("ri-hospital-line", 20, "#FF5677")}
        {renderIcon("ri-home-4-fill", 20, "#2D4263")}
        {renderIcon("ri-bank-fill", 20, "#FABB51")}
      </Container>
      <Container my={3} flexDirection="row">
        {renderIcon("ri-archive-drawer-line", 30, "#F0BB62")}
        {renderIcon("ri-briefcase-line", 30, "#DD4A48")}
        {renderIcon("ri-bookmark-3-line", 30, "#116530")}
        {renderIcon("ri-calendar-check-line", 30, "#FF5403")}
      </Container>
      <Container my={3} flexDirection="row">
        {renderIcon("ri-question-answer-line", 40, "#F0BB62")}
        {renderIcon("ri-paint-brush-line", 40, "#DD4A48")}
        {renderIcon("ri-git-repository-commits-line", 40, "#FFE6BC")}
        {renderIcon("ri-dashboard-2-line", 40, "#FF5403")}
      </Container>
      <Container my={3} flexDirection="row">
        {renderIcon("SettingsChecked", 40, "grey")}
        {renderIcon("Share", 40, "grey")}
        {renderIcon("UserRemove", 40, "grey")}
        {renderIcon("WidgetModes", 40, "grey")}
      </Container>
    </Container>
  );
};
