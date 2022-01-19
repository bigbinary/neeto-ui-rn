import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDropdown = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6 13h6M6 17h6M18.999 5.775a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M2 19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3H4a2 2 0 0 0-2 2v14Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 3h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgDropdown;
