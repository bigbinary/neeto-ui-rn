import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgVolume = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 6.385c0-.887-1.069-1.335-1.7-.714L7.667 8.257a1 1 0 0 1-.701.287H4a1 1 0 0 0-1 1v3.847a1 1 0 0 0 1 1h2.9a1 1 0 0 1 .702.287l2.697 2.65c.633.622 1.701.174 1.701-.713V6.385Z"
      fill="#68737D"
    />
    <Path
      d="M14 8.358c.565.785.866 1.703.866 2.642 0 .939-.3 1.857-.866 2.642m1.923-7.037c1.03 1.273 1.585 2.813 1.585 4.395 0 1.582-.555 3.122-1.585 4.395M17.683 5C19.184 6.701 20 8.818 20 11s-.817 4.299-2.316 6"
      stroke="#68737D"
      strokeLinecap="round"
    />
  </Svg>
);

export default SvgVolume;
