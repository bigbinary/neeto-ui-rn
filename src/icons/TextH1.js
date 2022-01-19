import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTextH1 = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5 6v12m8-12v12m-8-6h8m5.5 6v-5l-1.25 1.25M20 18h-3"
      stroke="#323232"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgTextH1;
