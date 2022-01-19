import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCursor = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.731 4.675c2.434-3.134 6.381-3.134 8.815 0m-2.875 6.908V7.152a1.477 1.477 0 1 0-2.954 0v8.523l-2.646-1.358a1.558 1.558 0 0 0-1.748 2.548l4.825 4.303c.366.327.84.507 1.331.507h4.633a2 2 0 0 0 1.952-1.566l1.073-4.83a2.5 2.5 0 0 0-2.057-3.013l-4.409-.683v0Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgCursor;
