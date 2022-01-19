import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgNeetoWireframe = props => (
  <Svg
    width={19}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.5 9.137v-4.7 0a2.007 2.007 0 0 1 2-2.009v0a2 2 0 0 1 2 2v4.577m-4-3.095h4-4ZM8.25 9V1H13v8M14 16h1.5v0a2.5 2.5 0 0 0 2.5-2.5v-1.445a2 2 0 0 0-2-2h-2.167"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 9h10.833v0a1 1 0 0 1 1 1v6.333A3.667 3.667 0 0 1 10.167 20h-5.5v0A3.667 3.667 0 0 1 1 16.333V10v0a1 1 0 0 1 1-1v0ZM12.25 3.84h-1.5M12.25 6.34h-.5"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgNeetoWireframe;
