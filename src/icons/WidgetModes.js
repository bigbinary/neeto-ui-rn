import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgWidgetModes = props => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16 19a6.99 6.99 0 0 1-5.833-3.129l1.666-1.107a5 5 0 0 0 8.334 0l1.666 1.107A6.99 6.99 0 0 1 16 19.001Zm4-11a2 2 0 1 0 2 2 1.98 1.98 0 0 0-2-2Zm-8 0a2 2 0 1 0 2 2 1.98 1.98 0 0 0-2-2Z"
      fill="#68737D"
    />
    <Path
      d="M17.736 30 16 29l4-7h6a1.998 1.998 0 0 0 2-2V6a1.998 1.998 0 0 0-2-2H6a1.997 1.997 0 0 0-2 2v14a1.997 1.997 0 0 0 2 2h9v2H6a3.999 3.999 0 0 1-4-4V6a3.999 3.999 0 0 1 4-4h20a3.999 3.999 0 0 1 4 4v14a3.999 3.999 0 0 1-4 4h-4.835l-3.43 6Z"
      fill="#68737D"
    />
  </Svg>
);

export default SvgWidgetModes;
