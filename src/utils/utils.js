import { Platform } from "react-native";

const shadowRadiusList = [
  1, 1.41, 2.22, 2.62, 3.84, 4.65, 4.65, 4.65, 5.46, 6.27, 6.68, 7.49, 8.3,
  9.11, 9.51, 10.32, 11.14, 11.95, 12.35, 13.16, 13.97, 14.78, 15.19, 16,
];

const shadowOpacityList = [
  0.18, 0.2, 0.22, 0.23, 0.25, 0.27, 0.29, 0.3, 0.32, 0.34, 0.36, 0.37, 0.39,
  0.41, 0.43, 0.44, 0.46, 0.48, 0.5, 0.51, 0.53, 0.55, 0.57, 0.58,
];

export const getShadowStyles = (elevation = 0) => {
  if (elevation > 24) elevation = 24;

  return {
    shadowOffset: {
      width: 0,
      height: Math.floor(elevation / 2),
    },
    shadowRadius: shadowRadiusList[elevation - 1],
    shadowOpacity: shadowOpacityList[elevation - 1],
    elevation,
  };
};

export const isAndroid = () => Platform.OS === "android";

export const isValidEmail = email =>
  String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

export const charsForRegex = chars => chars?.join("|") || "";

export const endsWithChars = (text, chars) => {
  const regex = `(${charsForRegex(chars)})$`;

  return text.match(regex);
};

export const trimChars = (text, chars) => {
  const charsRegex = charsForRegex(chars);

  const startRegexPattern = `^(${charsRegex})+`;
  const endRegexPattern = `(${charsRegex})+$`;

  const startRegex = new RegExp(startRegexPattern);
  const endRegex = new RegExp(endRegexPattern);

  const trimmedText = text.replace(startRegex, "").replace(endRegex, "");

  return trimmedText;
};
