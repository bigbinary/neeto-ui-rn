import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPhone = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.131 13.869a12.634 12.634 0 0 1-2.638-3.809.75.75 0 0 1 .166-.827l.819-.819c.671-.671.671-1.62.085-2.206L7.39 5.035a2 2 0 0 0-2.828 0l-.652.651c-.741.741-1.05 1.81-.85 2.87.494 2.613 2.012 5.474 4.461 7.923 2.449 2.449 5.31 3.967 7.923 4.461 1.06.2 2.129-.109 2.87-.85l.651-.651a2 2 0 0 0 0-2.828l-1.173-1.173a1.5 1.5 0 0 0-2.121 0l-.903.904a.749.749 0 0 1-.827.166 12.678 12.678 0 0 1-3.81-2.639Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgPhone;
