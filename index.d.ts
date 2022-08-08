import React from "react";
import {
  FlexboxProps,
  SpaceProps,
  BorderProps,
  ColorProps,
  LayoutProps,
  PositionProps,
  TypographyProps,
} from "styled-system";
import { ModalProps } from "react-native-modal";

import { theme } from "./src/theme";

interface ViewProps
  extends FlexboxProps,
    SpaceProps,
    BorderProps,
    ColorProps,
    LayoutProps,
    PositionProps {
  children?: React.ReactNode;
}

interface TextProps extends TypographyProps {}

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
}

type AlertProps = {};
type AlertButton = {
  label: string;
  onPress?: () => void;
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
  bgColor?: keyof typeof theme.colors.background;
  fontColor?: keyof typeof theme.colors.font;
  imageUrl?: string;
}

interface BadgeProps extends ViewProps {
  badgeColor?: keyof typeof theme.colors.background;
  content: string | number;
  size?: number;
  fontSize?: keyof typeof theme.fontSizes;
  fontFamily?: keyof typeof theme.fonts;
  color?: keyof typeof theme.colors.font;
}

interface BottomSheetProps extends ViewProps {
  data: Array<any>;
  title?: string;
  hide?: () => void;
  isVisible: boolean;
  onItemPress?: () => void;
  selectedItemIndex?: number;
  bg?: keyof typeof theme.colors.background;
  children?: React.ReactNode;
  titleContainerStyle?: ViewProps;
  titleTextStyle?: TextProps;
  modalParams?: ModalProps;
  HeaderComponent?: () => void;
  ContentRow?: () => void;
  contentType?: "checkbox" | null;
  canSearch?: boolean;
}

export const Accordian: React.FC<AccordianProps>;
export const Alert: React.FC<AlertProps> & {
  show?: (params: AlertShowParams) => void;
};
export const Avatar: React.FC<AvatarProps>;
export const Badge: React.FC<BadgeProps>;
export const BottomSheet: React.FC<BottomSheetProps>;
export const Container: React.FC<ViewProps>;
