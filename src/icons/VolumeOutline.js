import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgVolumeOutline = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.537 15.978c1.162-.722 1.963-2.224 1.963-3.973 0-1.749-.801-3.252-1.963-3.983m2.968 11.043c1.808-1.555 2.995-4.135 2.995-7.062 0-2.931-1.189-5.513-3-7.067M5.875 8.625H3.5a1 1 0 0 0-1 1v4.75a1 1 0 0 0 1 1h2.375l3.979 3.371a1 1 0 0 0 1.646-.763V6.017c0-.852-.997-1.314-1.646-.763L5.875 8.625Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgVolumeOutline;
