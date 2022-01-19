import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSmiley = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.038 9-9-4.038-9-9-9Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.5 15.688S14.189 17 12 17c-2.187 0-3.5-1.312-3.5-1.312M15.33 9.5a.25.25 0 1 0 .002.5.25.25 0 0 0-.002-.5Zm-6.69 0a.25.25 0 1 0 .002.5.25.25 0 0 0-.001-.5Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgSmiley;
