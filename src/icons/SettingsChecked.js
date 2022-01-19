import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSettingsChecked = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16 22a6 6 0 1 1 6-6 5.937 5.937 0 0 1-6 6Zm0-10a3.911 3.911 0 0 0-4 4 3.911 3.911 0 0 0 4 4 3.911 3.911 0 0 0 4-4 3.911 3.911 0 0 0-4-4Z"
      fill="#68737D"
    />
    <Path
      d="m29.303 11.044-2.36-4.088a1.997 1.997 0 0 0-2.373-.894l-2.434.823c-.42-.283-.858-.536-1.313-.758l-.503-2.519A2 2 0 0 0 18.358 2h-4.72a2 2 0 0 0-1.961 1.608l-.504 2.519c-.46.22-.902.471-1.327.753l-2.419-.818a1.998 1.998 0 0 0-2.373.894l-2.36 4.088a2 2 0 0 0 .412 2.502l1.93 1.697c-.017.252-.038.502-.038.757 0 .258.01.513.028.766l-1.92 1.688a2 2 0 0 0-.412 2.502l2.36 4.088a1.998 1.998 0 0 0 2.373.895l2.434-.824c.42.283.858.536 1.312.759l.504 2.518A2 2 0 0 0 13.638 30h4.36v-2h-4.36l-.71-3.55a9.098 9.098 0 0 1-2.695-1.572l-3.447 1.166-2.36-4.088 2.725-2.395a8.926 8.926 0 0 1-.007-3.128l-2.718-2.389 2.36-4.088 3.428 1.16a9.032 9.032 0 0 1 2.714-1.565L13.638 4h4.72l.71 3.55a9.098 9.098 0 0 1 2.695 1.572l3.447-1.166 2.36 4.088-2.798 2.452L26.091 16l2.8-2.454a2 2 0 0 0 .412-2.502Z"
      fill="#68737D"
    />
    <Path
      d="m23 26.18-2.59-2.59L19 25l4 4 7-7-1.41-1.41L23 26.18Z"
      fill="#68737D"
    />
  </Svg>
);

export default SvgSettingsChecked;
