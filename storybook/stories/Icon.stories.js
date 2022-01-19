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
        {renderIcon("ActivityLog", 20, "grey")}
        {renderIcon("Agents", 20, "grey")}
        {renderIcon("BookOpen", 20, "grey")}
        {renderIcon("ChatNotification", 20, "grey")}
      </Container>
      <Container my={3} flexDirection="row">
        {renderIcon("CenterAlign", 30, "#F0BB62")}
        {renderIcon("Code", 30, "#DD4A48")}
        {renderIcon("Customize", 30, "#116530")}
        {renderIcon("Dashboard", 30, "#FF5403")}
      </Container>
      <Container my={3} flexDirection="row">
        {renderIcon("Dropdown", 40, "#F0BB62")}
        {renderIcon("Design", 40, "#DD4A48")}
        {renderIcon("EmailSent", 40, "#FFE6BC")}
        {renderIcon("HourGlass", 40, "#FF5403")}
      </Container>
      <Container my={3} flexDirection="row">
        {renderIcon("Location", 40, "white")}
        {renderIcon("Share", 40, "white")}
        {renderIcon("UserRemove", 40, "white")}
        {renderIcon("WidgetModes", 40, "white")}
      </Container>
    </Container>
  );
};
