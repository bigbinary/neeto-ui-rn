import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgListDot = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 5h8M6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 19h8m-8-7h8-8ZM6 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      stroke="#323232"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgListDot;
