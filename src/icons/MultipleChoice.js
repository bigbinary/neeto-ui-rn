import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMultipleChoice = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 5h8M12 12h8M12 19h8"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      stroke="#fff"
      strokeWidth={1.5}
      d="M3.75 2.25h4.5v4.5h-4.5zM3.75 9.75h4.5v4.5h-4.5zM3.75 17.25h4.5v4.5h-4.5z"
    />
  </Svg>
);

export default SvgMultipleChoice;
