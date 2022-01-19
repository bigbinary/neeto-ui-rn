import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMenuVertical = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11.997 17.5c-.275 0-.5.225-.497.5 0 .275.225.5.5.5s.5-.225.5-.5-.225-.5-.503-.5ZM11.997 11.5c-.275 0-.5.225-.497.5 0 .275.225.5.5.5s.5-.225.5-.5-.225-.5-.503-.5ZM11.997 5.5c-.275 0-.5.225-.497.5 0 .275.225.5.5.5s.5-.225.5-.5-.225-.5-.503-.5Z"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgMenuVertical;
