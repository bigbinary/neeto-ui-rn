import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTextH2 = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17 14a1 1 0 0 1 1-1h.614a1.229 1.229 0 0 1 .933 2.028L17 18h3M5 6v12m8-12v12m-8-6h8"
      stroke="#323232"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgTextH2;
