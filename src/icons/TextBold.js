import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTextBold = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7 6h5.875a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H7V6Zm0 6h7a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H7v-6Z"
      stroke="#323232"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgTextBold;
