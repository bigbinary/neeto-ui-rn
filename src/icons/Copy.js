import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCopy = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5.167 16A2.167 2.167 0 0 1 3 13.833V5.167C3 3.97 3.97 3 5.167 3h8.667C15.03 3 16 3.97 16 5.167"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.833 21h-8.667A2.167 2.167 0 0 1 8 18.833v-8.667C8 8.97 8.97 8 10.167 8h8.667C20.03 8 21 8.97 21 10.167v8.667C21 20.03 20.03 21 18.833 21v0Z"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgCopy;
