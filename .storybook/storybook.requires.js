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

// temporary fix for https://github.com/storybookjs/react-native/issues/327 whilst the issue is investigated
try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return [
    require("../storybook/stories/_Home.stories.jsx"),
    require("../storybook/stories/Accordion.stories.jsx"),
    require("../storybook/stories/Alert.stories.jsx"),
    require("../storybook/stories/AnimatedImage.stories.jsx"),
    require("../storybook/stories/Avatar.stories.jsx"),
    require("../storybook/stories/Badge.stories.jsx"),
    require("../storybook/stories/BottomSheet.stories.jsx"),
    require("../storybook/stories/BottomTabBar.stories.jsx"),
    require("../storybook/stories/Button.stories.jsx"),
    require("../storybook/stories/ButtonGroup.stories.jsx"),
    require("../storybook/stories/Calendar.stories.jsx"),
    require("../storybook/stories/Card.stories.jsx"),
    require("../storybook/stories/Carousel.stories.jsx"),
    require("../storybook/stories/CheckBox.stories.jsx"),
    require("../storybook/stories/Chip.stories.jsx"),
    require("../storybook/stories/Divider.stories.jsx"),
    require("../storybook/stories/FAB.stories.jsx"),
    require("../storybook/stories/FlashList.stories.jsx"),
    require("../storybook/stories/Input.stories.jsx"),
    require("../storybook/stories/InputEmailChip.stories.jsx"),
    require("../storybook/stories/ListItem.stories.jsx"),
    require("../storybook/stories/Loader.stories.jsx"),
    require("../storybook/stories/MultiSelect.stories.jsx"),
    require("../storybook/stories/NotificationPreferenceList.stories.jsx"),
    require("../storybook/stories/OnBoarding.stories.jsx"),
    require("../storybook/stories/OrganizationItem.stories.jsx"),
    require("../storybook/stories/OtpInputs.stories.jsx"),
    require("../storybook/stories/Popover.stories.jsx"),
    require("../storybook/stories/RadioButton.stories.jsx"),
    require("../storybook/stories/RichTextEditor.stories.jsx"),
    require("../storybook/stories/SearchBar.stories.jsx"),
    require("../storybook/stories/SegmentedTopBar.stories.jsx"),
    require("../storybook/stories/SocialButton.stories.jsx"),
    require("../storybook/stories/ToastMessage.stories.jsx"),
    require("../storybook/stories/ToggleSwitch.stories.jsx"),
    require("../storybook/stories/TopBar.stories.jsx"),
    require("../storybook/stories/Touchable.stories.jsx"),
    require("../storybook/stories/Typography.stories.jsx"),
  ];
};

configure(getStories, module, false);
