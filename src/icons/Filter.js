import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFilter = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m14.5 13.5 5.207-5.207A1 1 0 0 0 20 7.586V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2.586c0 .265.105.52.293.707L9.5 13.5M9.5 13.5v6.249c0 .813.764 1.41 1.553 1.213l2.5-.625a1.25 1.25 0 0 0 .947-1.213V13.5"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgFilter;
