import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTranslate = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 8.5v2M14.712 15.5a5.98 5.98 0 0 1-2.712-5M12 10.5a5.98 5.98 0 0 1-2.712 5"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5ZM15 10.5H9"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgTranslate;
