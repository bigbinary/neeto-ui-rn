import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgNeetoKb = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m18.414 6.414-2.828-2.828A2 2 0 0 0 14.172 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7.828a2 2 0 0 0-.586-1.414v0Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19 8h-4a1 1 0 0 1-1-1V3M10.5 18h3M12 12v6M9 13.5v-1a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgNeetoKb;
