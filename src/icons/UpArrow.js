import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgUpArrow = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.023 10.514 12 4.498l5.977 6.016M12.01 4.51V19.5 4.51Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgUpArrow;
