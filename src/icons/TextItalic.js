import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTextItalic = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10 6h7m-3.5 0-3 12 3-12Zm.5 12H7h7Z"
      stroke="#323232"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgTextItalic;
