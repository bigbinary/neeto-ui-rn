import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLoading = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21 12h-3M3 12h3M12 3v3M12 21v-3M18.364 18.364l-2.12-2.121M5.636 5.636l2.121 2.121M16.243 7.757l2.121-2.121M7.757 16.243l-2.12 2.121"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgLoading;
