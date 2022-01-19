import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgUserRemove = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18 20v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM20.414 12.414l-2.828-2.828M17.586 12.414l2.828-2.828"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgUserRemove;
