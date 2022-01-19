import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgNeetoForm = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17 2v0a5 5 0 1 1-5 5v0a5 5 0 0 1 5-5"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20 14v.375a2.833 2.833 0 0 1-2.833 2.833h-4.722l-4.722 3.778v-3.778h-1.89 0A2.833 2.833 0 0 1 3 14.375V6.82v0a2.833 2.833 0 0 1 2.833-2.833H10M18.358 6.944A.054.054 0 0 0 18.3 7a.056.056 0 1 0 .056-.056m0 0v0ZM15.642 6.944a.056.056 0 1 0 .003 0"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgNeetoForm;
