import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgNotification = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.5 17.359a1.9 1.9 0 0 0 1.9-1.894 2.005 2.005 0 0 0-.591-1.419l-1.26-1.26V9.043A5.542 5.542 0 0 0 12 3.5v0a5.544 5.544 0 0 0-5.54 5.543v3.74l-1.26 1.26a2.006 2.006 0 0 0-.591 1.419v0a1.9 1.9 0 0 0 1.9 1.894l10.992.003ZM10.521 20.5h2.957"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgNotification;
