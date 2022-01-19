import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgAgents = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18 17h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Zm0 0v1a2 2 0 0 1-2 2h-2.125M18.5 10v-.5a6.5 6.5 0 1 0-13 0v.5m8.375 10c0-.69-.56-1.25-1.25-1.25h-1.25a1.25 1.25 0 0 0 0 2.5h1.25c.69 0 1.25-.56 1.25-1.25ZM6 17H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h1a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgAgents;
