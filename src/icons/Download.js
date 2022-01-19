import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDownload = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21 17a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4m9 0V3v14Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m17 12-5.001 5.001-5-5.001"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgDownload;
