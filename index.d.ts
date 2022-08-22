import React from "react";
import Carousel from "react-native-snap-carousel";
import RNPopover from "react-native-popover-view";
import {
  FlexboxProps,
  SpaceProps,
  BorderProps,
  ColorProps,
  LayoutProps,
  PositionProps,
  ButtonStyleProps,
  TypographyProps,
} from "styled-system";
import {
  ViewProps as RNViewProps,
  TextInputProps as RNTextInputProps,
  ScrollViewProps as RNScrollViewProps,
  FlatListProps as RNFlatListProps,
  TextProps as RNTextProps,
  TextInputAndroidProps as RNTextInputAndroidProps,
  TextInputIOSProps as RNTextInputIOSProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import { ModalProps } from "react-native-modal";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { CalendarProps } from "react-native-calendars";
import { FlashListProps as RNFlashListProps } from "@shopify/flash-list";
import {
  RichEditorProps,
  RichToolbarProps,
} from "react-native-pell-rich-editor";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import {
  ToastProps as RNToastProps,
  ToastHideParams,
  ToastShowParams,
  ToastConfig,
} from "react-native-toast-message";
import { RippleProps } from "react-native-material-ripple";

import { theme as themeDef } from "./src/theme";
import { BUTTON_VARIANTS } from "./src/components/Button";

type addPrefixToObject<
  TObject extends object,
  TPrefix extends string
> = `${TPrefix}${keyof TObject}`;

const theme: {
  colors: {
    font: addPrefixToObject<typeof themeDef.colors.font, "font.">;
    background: addPrefixToObject<
      typeof themeDef.colors.background,
      "background."
    >;
    border: addPrefixToObject<typeof themeDef.colors.border, "border.">;
    toast: addPrefixToObject<typeof themeDef.colors.toast, "toast.">;
  };
  fonts: keyof typeof themeDef.fonts;
  fontSizes: keyof typeof themeDef.fontSizes;
};

interface StyleProps
  extends FlexboxProps,
    SpaceProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps {}

interface ViewProps extends RNViewProps, StyleProps {
  children?: React.ReactNode;
}
interface TextProps extends RNTextProps, StyleProps, TypographyProps {
  children?: React.ReactNode;
}
interface TextInputProps
  extends RNTextInputAndroidProps,
    RNTextInputIOSProps,
    StyleProps,
    TypographyProps {}
interface FlatListProps extends RNFlatListProps, StyleProps {}
interface ScrollViewProps extends RNScrollViewProps, StyleProps {}

interface AccordianProps extends ViewProps {
  header?: () => void;
  noBorder?: boolean;
  onStateChange?: () => void;
  iconProp?: {
    name?: string;
    Label?: () => void;
    size?: number;
    color?: string;
  };
  position?: "top" | "bottom";
}

type AlertProps = {};
type AlertButton = {
  label: string;
  onPress?: () => void;
  variant?: typeof BUTTON_VARIANTS[keyof typeof BUTTON_VARIANTS];
};
type AlertShowParams = {
  title?: string;
  description?: string;
  isCancelable?: boolean;
  onDismiss?: () => void;
  buttons?: Array<AlertButton>;
};

interface AvatarProps extends ViewProps {
  name: string;
  variant?: "small" | "medium";
  bgColor?: typeof theme.colors.background;
  fontColor?: typeof theme.colors.font;
  imageUrl?: string;
}

interface BadgeProps extends ViewProps {
  badgeColor?: typeof theme.colors.background;
  content?: string | number;
  size?: number;
  fontSize?: typeof theme.fontSizes;
  fontFamily?: typeof theme.fonts;
  color?: typeof theme.colors.font;
}

interface BottomSheetProps extends ViewProps {
  data?: Array<any>;
  title?: string;
  hide?: () => void;
  isVisible: boolean;
  onItemPress?: () => void;
  selectedItemIndex?: number;
  bg?: typeof theme.colors.background;
  titleContainerStyle?: ViewProps;
  titleTextStyle?: TextProps;
  modalParams?: ModalProps;
  HeaderComponent?: () => void;
  ContentRow?: () => void;
  contentType?: "checkbox" | null;
  canSearch?: boolean;
}

interface ButtonProps extends ViewProps {
  variant?: typeof BUTTON_VARIANTS[keyof typeof BUTTON_VARIANTS];
  label: string;
  labelStyle?: TextProps;
  RightIcon?: () => void;
  LeftIcon?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

type ButtonGroupProps = {
  activeColor?: typeof theme.colors[keyof typeof theme.colors];
  inActiveColor?: typeof theme.colors[keyof typeof theme.colors];
  buttonItems: Array<string>;
  onPress: () => void;
  currentActiveBtn: string;
  wrapperStyle?: StyleProps;
  buttonTextStyle?: StyleProps;
  buttonStyle?: StyleProps;
};

interface CardProps extends ViewProps {
  elevation?: number;
}

type CarouselProps = {
  itemArray: Array<any>;
  renderItem: () => void;
  carouselRef: React.RefObject<Carousel>;
  onSnapToItem: () => void;
};

interface CheckBoxProps extends ViewProps {
  checked: boolean;
  onSelect: () => void;
  disabled?: boolean;
  label?: string;
  checkboxStyle?: StyleProps;
  checkIconStyle?: any;
  labelStyle?: TextProps;
}

type ChipProps = {
  label: string;
  LeftIcon?: React.FC;
  variant?: "outlined" | "solid";
  labelColor?: typeof theme.colors.font;
  closeIconBackground?: typeof theme.colors.background;
  closeIconColor?: string;
  onClose?: () => void;
  onChipPress?: () => void;
  isDisabled?: disabled;
  closeIconSize?: number;
  closeIcon?: string;
};

interface DividerProps extends ViewProps {
  thickness?: number | string;
  orientation?: "horizontal" | "vertical";
  bg?: typeof theme.colors.background;
}

interface FabProps extends ViewProps {
  Icon: React.FC;
  bg: typeof theme.colors.background;
  disabled?: boolean;
  variant?: "solid" | "inverse";
  onPress?: () => void;
}

interface FlashListProps extends RNFlashListProps {
  SkeletonComponent?: React.FC;
  durationPerItem?: number;
  data: Array<any>;
  isLoading?: boolean;
  placeHolderItemCount?: number;
  onRefresh?: () => void;
  keyExtractor?: () => void;
}

type InputProps = {
  label?: string;
  value: string;
  onChangeText: () => void;
  errorMessage?: string;
  PrefixIcon?: React.FC;
  SuffixIcon?: React.FC;
  autoFocus?: boolean;
  disabled?: boolean;
  noBorder?: boolean;
  inputProps?: RNTextInputProps;
};

interface ListItemProps extends ViewProps {
  LeftComponent?: React.FC;
  label: string;
  RightComponent?: React.FC;
}

interface MultiSelectProps extends ViewProps {
  options?: Array<any>;
  label?: string;
  value?: string | Array<any>;
  placeholder?: string;
  labelExtractor?: () => void;
  valueExtractor?: () => void;
  onSelect?: () => void;
  deletedValue?: () => void;
  isLoading?: boolean;
  isSearchable?: boolean;
  showCreateOption?: boolean;
  labelStyle?: TextProps;
  containerStyle?: ViewProps;
  inputContainerStyle?: ViewProps;
  dropdownContainerStyle?: ViewProps;
  itemContainerStyle?: ViewProps;
  multiSelectedItemContainerStyle?: ViewProps;
  multiSelectedItemLabelStyle?: TextProps;
  selectedValue?: () => void;
  CreateItemComponent?: React.FC;
  showCreateOptionLoader?: boolean;
  createSearchedOptionLabelStyle?: TextProps;
  onPressCreateOption?: () => void;
  createSearchedOptionContainerStyle?: ViewProps;
  onDonePress?: () => void;
}

type OnBoardingProps = {
  appLogo: React.FC;
  slides: Array<any>;
  onComplete: () => void;
  logoWidth?: number;
};

type OtpInputsProps = {
  handleChange: () => {};
  numberOfInputs: number;
  error?: boolean;
  code: string;
  containerStyles?: ViewProps;
  textStyles?: TextProps;
};

interface ParentViewProps extends ViewProps {
  barStyle?: "light-content" | "dark-content";
  topInset?: boolean;
  rightInset?: boolean;
  leftInset?: boolean;
  bottomInset?: boolean;
}

type RNPopoverProps = typeof RNPopover.propTypes;
interface PopoverProps extends RNPopoverProps {
  children?: React.ReactNode;
  data?: Array<any>;
  fontFamily?: typeof theme.fonts;
  fontSize?: typeof theme.fontSizes;
}

interface RadioButtonProps extends ViewProps {
  selected: boolean;
  onSelect: () => void;
  disabled?: boolean;
  label?: string;
  radioButtonStyle?: ViewProps;
  labelStyle?: TextProps;
}

type RichTextEditorProps = {
  onChange: () => void;
  placeholderText?: string;
  children?: React.ReactNode;
  toolbarActions: Array<string>;
  editorProps?: RichEditorProps;
  toolBarProps?: RichToolbarProps;
};

interface SearchBarProps extends ViewProps {
  placeholder?: string;
  onChangeText: () => void;
  onCancel?: () => void;
  debounceDelay?: number | string;
  showCancelButton?: boolean;
  containerProps?: ViewProps;
  searchbarProps?: TextInputProps;
}

interface SegmentedTopBarProps extends MaterialTopTabBarProps {
  inactiveSegmentStyle?: ViewStyle;
  activeSegmentStyle?: ViewStyle;
  activeTextStyle?: ViewProps;
  inactiveTextStyle?: ViewProps;
  height?: number;
}

interface SelectProps
  extends Omit<MultiSelectProps, "value" | "selectedValue" | "deletedValue"> {
  value: any;
}

interface SocialButtonProps extends ViewProps {
  variant: "apple" | "google";
  disabled?: boolean;
  labelStyle?: TextProps;
  isLoading?: boolean;
}

interface ToastProps extends Omit<RNToastProps, "config" | "position"> {
  toasterConfig: ToastConfig;
}

type ToggleSwitchProps = {
  value: boolean;
  onValueChange?: () => void;
  disabled?: boolean;
};

type TopBarProps = {
  data: Array<any>;
  activeIndex?: number;
  onActiveTabChange: () => void;
  activeTabTextStyle?: TextStyle;
  activeTabContainerStyle?: ViewStyle;
  inActiveTabTextStyle?: TextStyle;
  inActiveTabContainerStyle?: ViewStyle;
  tabContainerStyle?: ViewStyle;
};

interface TouchableProps extends RippleProps, StyleProps, ButtonStyleProps {
  children?: React.ReactNode;
}

export const Accordian: React.FC<AccordianProps>;
export const Alert: React.FC<AlertProps> & {
  show?: (params: AlertShowParams) => void;
};
export const Avatar: React.FC<AvatarProps>;
export const Badge: React.FC<BadgeProps>;
export const BottomSheet: React.FC<BottomSheetProps>;
export const BottomTabBar: React.FC<BottomTabBarProps>;
export const Button: React.FC<ButtonProps>;
export const ButtonGroup: React.FC<ButtonGroupProps>;
export const Calendar: React.FC<CalendarProps>;
export const Card: React.FC<CardProps>;
export const Carousel: React.FC<CarouselProps>;
export const CheckBox: React.FC<CheckBoxProps>;
export const Chip: React.FC<ChipProps>;
export const Container: React.FC<ViewProps>;
export const Divider: React.FC<DividerProps>;
export const Fab: React.FC<FabProps>;
export const FlashList: React.FC<FlashListProps>;
export const FlatList: React.FC<FlatListProps>;
export const Input: React.FC<InputProps>;
export const ListItem: React.FC<ListItemProps>;
export const MultiSelect: React.FC<MultiSelectProps>;
export const OnBoarding: React.FC<OnBoardingProps>;
export const OtpInputs: React.FC<OtpInputsProps>;
export const ParentView: React.FC<ParentViewProps>;
export const Popover: React.FC<PopoverProps>;
export const RadioButton: React.FC<RadioButtonProps>;
export const RichTextEditor: React.FC<RichTextEditorProps>;
export const ScrollView: React.FC<ScrollViewProps>;
export const SearchBar: React.FC<SearchBarProps>;
export const SegmentedTopBar: React.FC<SegmentedTopBarProps>;
export const Select: React.FC<SelectProps>;
export const SocialButton: React.FC<SocialButtonProps>;
export const Toast: React.FC<ToastProps> & {
  show?: (params: ToastShowParams) => void;
  hide?: (params: ToastHideParams) => void;
};
export const ToggleSwitch: React.FC<ToggleSwitchProps>;
export const TopBar: React.FC<TopBarProps>;
export const Touchable: React.FC<TouchableProps>;
export const Typography: React.FC<TextProps>;
