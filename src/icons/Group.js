import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgGroup = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M26 14h-2v2h2a3.004 3.004 0 0 1 3 3v4h2v-4a5.005 5.005 0 0 0-5-5ZM24 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0-2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-1 28h-2v-2a3.004 3.004 0 0 0-3-3h-4a3.004 3.004 0 0 0-3 3v2H9v-2a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5v2Zm-7-17a3 3 0 1 1 0 5.999A3 3 0 0 1 16 13Zm0-2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-8 3H6a5.006 5.006 0 0 0-5 5v4h2v-4a3.003 3.003 0 0 1 3-3h2v-2ZM8 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0-2a5 5 0 1 0 0 10A5 5 0 0 0 8 2Z"
      fill="#68737D"
    />
  </Svg>
);

export default SvgGroup;
