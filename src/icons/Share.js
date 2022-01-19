import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgShare = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.553 10.114a2.667 2.667 0 1 1-3.772 3.772 2.667 2.667 0 0 1 3.772-3.772M19.219 4.781a2.667 2.667 0 1 1-3.772 3.772 2.667 2.667 0 0 1 3.772-3.772M19.219 15.447a2.667 2.667 0 1 1-3.772 3.772 2.667 2.667 0 0 1 3.772-3.772M9.04 10.81l5.92-2.96M9.04 13.19l5.92 2.96"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgShare;
