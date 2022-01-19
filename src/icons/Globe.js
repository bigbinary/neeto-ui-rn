import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgGlobe = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 21a9 9 0 1 1 9-9M3.513 9h16.868M3.514 15H12"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 12a15.476 15.476 0 0 0-2.167-7.94 2.115 2.115 0 0 0-3.665 0 15.628 15.628 0 0 0 0 15.881 2.125 2.125 0 0 0 1.833 1.06"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m19.244 17.379-1.556 1.556-.933-.934"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgGlobe;
