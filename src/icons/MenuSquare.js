import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMenuSquare = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18.239 3H5.761A2.761 2.761 0 0 0 3 5.761v12.478A2.761 2.761 0 0 0 5.761 21h12.478A2.76 2.76 0 0 0 21 18.239V5.761A2.761 2.761 0 0 0 18.239 3Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.5 15a.5.5 0 1 0-.5.5v0a.5.5 0 0 0 .5-.5m-6-6a.5.5 0 1 0-.5.5v0a.5.5 0 0 0 .5-.5v0Zm6 0a.5.5 0 1 0-.5.5v0a.5.5 0 0 0 .5-.5v0Zm-6 6a.5.5 0 1 0-.5.5v0a.5.5 0 0 0 .5-.5v0Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgMenuSquare;
