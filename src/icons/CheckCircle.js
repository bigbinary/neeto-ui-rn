import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCheckCircle = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"
      stroke="#00BA88"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m8.44 12.339 2.167 2.167-.02-.02 4.88-4.89"
      stroke="#00BA88"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgCheckCircle;
