/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
} from "@storybook/react-native";

import "@storybook/addon-ondevice-notes/register";
import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));

const getStories = () => {
  return [
    require("../storybook/stories/_Home.stories.js"),
    require("../storybook/stories/Alert.stories.js"),
    require("../storybook/stories/Avatar.stories.js"),
    require("../storybook/stories/Badge.stories.js"),
    require("../storybook/stories/BottomSheet.stories.js"),
    require("../storybook/stories/Button.stories.js"),
    require("../storybook/stories/ButtonGroup.stories.js"),
    require("../storybook/stories/Card.stories.js"),
    require("../storybook/stories/CheckBox.stories.js"),
    require("../storybook/stories/Chip.stories.js"),
    require("../storybook/stories/FAB.stories.js"),
    require("../storybook/stories/Input.stories.js"),
    require("../storybook/stories/MultiSelect.stories.js"),
    require("../storybook/stories/OtpInputs.stories.js"),
    require("../storybook/stories/Popover.stories.js"),
    require("../storybook/stories/RadioButton.stories.js"),
    require("../storybook/stories/RichTextEditor.stories.js"),
    require("../storybook/stories/Select.stories.js"),
    require("../storybook/stories/ToastMessage.stories.js"),
    require("../storybook/stories/ToggleSwitch.stories.js"),
    require("../storybook/stories/TopBar.stories.js"),
    require("../storybook/stories/Touchable.stories.js"),
    require("../storybook/stories/Typography.stories.js"),
  ];
};

configure(getStories, module, false);
