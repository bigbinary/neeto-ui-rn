import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgVolume25 = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 6.385c0-.887-1.069-1.335-1.7-.714L7.667 8.257a1 1 0 0 1-.701.287H4a1 1 0 0 0-1 1v3.847a1 1 0 0 0 1 1h2.9a1 1 0 0 1 .702.287l2.697 2.65c.633.622 1.701.174 1.701-.713V6.385Z"
      fill="#68737D"
    />
    <Path
      d="M12 10.5c.32.446.492.967.492 1.5s-.171 1.054-.492 1.5"
      stroke="#68737D"
      strokeLinecap="round"
    />
  </Svg>
);

export default SvgVolume25;
