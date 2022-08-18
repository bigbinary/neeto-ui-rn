import React from "react";
import Carousel from "react-native-snap-carousel";
import {
  FlexboxProps,
  SpaceProps,
  BorderProps,
  ColorProps,
  LayoutProps,
  PositionProps,
  TypographyProps,
} from "styled-system";
import { ViewProps as RNViewProps } from "react-native";
import { ModalProps } from "react-native-modal";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { CalendarProps } from "react-native-calendars";

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

interface TextProps extends StyleProps, TypographyProps {}

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
