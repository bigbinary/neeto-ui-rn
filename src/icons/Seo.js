import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSeo = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m15.456 9.757-3.419 3.42-2.28-2.28-2.279 2.28"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m20 20-3.25-3.25m-.003-10.563a7.467 7.467 0 1 1-10.56 10.56 7.467 7.467 0 0 1 10.56-10.56v0Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgSeo;
