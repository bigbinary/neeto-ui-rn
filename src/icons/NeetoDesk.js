import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgNeetoDesk = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21 12a9 9 0 0 1-9 9M3 12a9 9 0 0 1 9-9"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3 12c0 1.054.188 2.1.554 3.088a1.01 1.01 0 0 0 1.12.65l.987-.174a1.5 1.5 0 0 0 1.225-1.69l-.297-2.077a1.5 1.5 0 0 0-1.746-1.265l-1.76.31M21 12a9 9 0 0 0-9-9"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21 12c0 1.054-.188 2.1-.554 3.088a1.01 1.01 0 0 1-1.12.65l-.987-.174a1.5 1.5 0 0 1-1.224-1.69l.296-2.077a1.503 1.503 0 0 1 1.746-1.265l1.76.31M13.492 12.491l-.004.002a.007.007 0 0 0-.002.003v.004l.001.004a.008.008 0 0 0 .004.002.007.007 0 0 0 .008-.003l.001-.004v-.003l-.002-.003-.002-.001h-.004M10.508 12.494l-.005.001a.007.007 0 0 0-.002.004v.004l.001.004a.007.007 0 0 0 .004.002h.004a.007.007 0 0 0 .004-.003v-.007l-.001-.003-.003-.001h-.002"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgNeetoDesk;
