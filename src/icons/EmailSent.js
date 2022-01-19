import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgEmailSent = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11 18H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m20.961 6.615-7.427 4.339a3 3 0 0 1-3.027 0L3.041 6.593M18 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m19.25 16.414-1.562 1.562-.938-.938"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgEmailSent;
