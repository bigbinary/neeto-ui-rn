import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgNeetoAnalytics = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21 7v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21 12h-4.691a.5.5 0 0 0-.447.276l-1.415 2.83a.5.5 0 0 1-.894 0L10.43 8.86a.5.5 0 0 0-.887-.014l-1.559 2.89a.502.502 0 0 1-.44.263H3"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgNeetoAnalytics;
