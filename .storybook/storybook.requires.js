/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./storybook",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:storybook(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
];

import "@storybook/addon-ondevice-notes/register";
import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./storybook/stories/_Home.stories.jsx": require("../storybook/stories/_Home.stories.jsx"),
    "./storybook/stories/Accordion.stories.jsx": require("../storybook/stories/Accordion.stories.jsx"),
    "./storybook/stories/Alert.stories.jsx": require("../storybook/stories/Alert.stories.jsx"),
    "./storybook/stories/AnimatedImage.stories.jsx": require("../storybook/stories/AnimatedImage.stories.jsx"),
    "./storybook/stories/Avatar.stories.jsx": require("../storybook/stories/Avatar.stories.jsx"),
    "./storybook/stories/Badge.stories.jsx": require("../storybook/stories/Badge.stories.jsx"),
    "./storybook/stories/BottomSheet.stories.jsx": require("../storybook/stories/BottomSheet.stories.jsx"),
    "./storybook/stories/BottomTabBar.stories.jsx": require("../storybook/stories/BottomTabBar.stories.jsx"),
    "./storybook/stories/Button.stories.jsx": require("../storybook/stories/Button.stories.jsx"),
    "./storybook/stories/ButtonGroup.stories.jsx": require("../storybook/stories/ButtonGroup.stories.jsx"),
    "./storybook/stories/Calendar.stories.jsx": require("../storybook/stories/Calendar.stories.jsx"),
    "./storybook/stories/Card.stories.jsx": require("../storybook/stories/Card.stories.jsx"),
    "./storybook/stories/Carousel.stories.jsx": require("../storybook/stories/Carousel.stories.jsx"),
    "./storybook/stories/ChatInput.stories.jsx": require("../storybook/stories/ChatInput.stories.jsx"),
    "./storybook/stories/CheckBox.stories.jsx": require("../storybook/stories/CheckBox.stories.jsx"),
    "./storybook/stories/Chip.stories.jsx": require("../storybook/stories/Chip.stories.jsx"),
    "./storybook/stories/Divider.stories.jsx": require("../storybook/stories/Divider.stories.jsx"),
    "./storybook/stories/FAB.stories.jsx": require("../storybook/stories/FAB.stories.jsx"),
    "./storybook/stories/FlashList.stories.jsx": require("../storybook/stories/FlashList.stories.jsx"),
    "./storybook/stories/Input.stories.jsx": require("../storybook/stories/Input.stories.jsx"),
    "./storybook/stories/InputEmailChip.stories.jsx": require("../storybook/stories/InputEmailChip.stories.jsx"),
    "./storybook/stories/LineLoader.stories.jsx": require("../storybook/stories/LineLoader.stories.jsx"),
    "./storybook/stories/ListItem.stories.jsx": require("../storybook/stories/ListItem.stories.jsx"),
    "./storybook/stories/Loader.stories.jsx": require("../storybook/stories/Loader.stories.jsx"),
    "./storybook/stories/MultiSelect.stories.jsx": require("../storybook/stories/MultiSelect.stories.jsx"),
    "./storybook/stories/NotificationPreferenceList.stories.jsx": require("../storybook/stories/NotificationPreferenceList.stories.jsx"),
    "./storybook/stories/OnBoarding.stories.jsx": require("../storybook/stories/OnBoarding.stories.jsx"),
    "./storybook/stories/OrganizationItem.stories.jsx": require("../storybook/stories/OrganizationItem.stories.jsx"),
    "./storybook/stories/OtpInputs.stories.jsx": require("../storybook/stories/OtpInputs.stories.jsx"),
    "./storybook/stories/Popover.stories.jsx": require("../storybook/stories/Popover.stories.jsx"),
    "./storybook/stories/RadioButton.stories.jsx": require("../storybook/stories/RadioButton.stories.jsx"),
    "./storybook/stories/RichTextEditor.stories.jsx": require("../storybook/stories/RichTextEditor.stories.jsx"),
    "./storybook/stories/SearchBar.stories.jsx": require("../storybook/stories/SearchBar.stories.jsx"),
    "./storybook/stories/SegmentedTopBar.stories.jsx": require("../storybook/stories/SegmentedTopBar.stories.jsx"),
    "./storybook/stories/SocialButton.stories.jsx": require("../storybook/stories/SocialButton.stories.jsx"),
    "./storybook/stories/ToastMessage.stories.jsx": require("../storybook/stories/ToastMessage.stories.jsx"),
    "./storybook/stories/ToggleSwitch.stories.jsx": require("../storybook/stories/ToggleSwitch.stories.jsx"),
    "./storybook/stories/TopBar.stories.jsx": require("../storybook/stories/TopBar.stories.jsx"),
    "./storybook/stories/Touchable.stories.jsx": require("../storybook/stories/Touchable.stories.jsx"),
    "./storybook/stories/Typography.stories.jsx": require("../storybook/stories/Typography.stories.jsx"),
  };
};

configure(getStories, module, false);
