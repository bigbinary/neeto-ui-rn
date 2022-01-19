import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgReport = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.167 20.5H4.444a.944.944 0 0 1-.944-.944v-3.778c0-.522.423-.944.944-.944h4.722l.001 5.666Zm5.666-16.056V20.5h4.722a.944.944 0 0 0 .944-.944V4.444a.944.944 0 0 0-.944-.944h-3.778a.944.944 0 0 0-.944.944Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.833 20.5H9.166V10.111c0-.522.423-.944.944-.944h4.722"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgReport;
