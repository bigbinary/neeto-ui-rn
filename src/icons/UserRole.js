import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgUserRole = props => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M22 11h4a1 1 0 0 1 1 1v2h-6v-2a1 1 0 0 1 1-1ZM24 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="#68737D"
    />
    <Path
      d="M30 18H18a2.002 2.002 0 0 1-2-2V4a2.003 2.003 0 0 1 2-2h12a2.002 2.002 0 0 1 2 2v12a2.003 2.003 0 0 1-2 2ZM18 4v12h12.001V4H18Zm-3 26h-2v-4a2.946 2.946 0 0 0-3-3H6a2.946 2.946 0 0 0-3 3v4H1v-4a4.952 4.952 0 0 1 5-5h4a4.95 4.95 0 0 1 5 5v4ZM8 11a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0-2a5 5 0 1 0 0 10A5 5 0 0 0 8 9Z"
      fill="#68737D"
    />
  </Svg>
);

export default SvgUserRole;
