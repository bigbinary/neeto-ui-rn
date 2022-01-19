import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgRefresh = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 4a8 8 0 1 0 3.825.973"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.825 8.048V4.512h3.536"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgRefresh;
