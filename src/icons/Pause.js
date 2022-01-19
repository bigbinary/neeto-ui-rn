import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPause = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      stroke="#68737D"
      strokeWidth={2}
      strokeLinecap="round"
      d="M9 6v11M15 6v11"
    />
  </Svg>
);

export default SvgPause;
