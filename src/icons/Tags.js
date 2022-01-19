import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTags = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.834 10.146a.367.367 0 1 0 .52.519.367.367 0 0 0-.52-.52Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m4.5 10 6.506-6.423A2 2 0 0 1 12.411 3H16.5m-4.21 3.29L5.08 13.5a1.977 1.977 0 0 0 0 2.796l4.124 4.124a1.977 1.977 0 0 0 2.796 0l7.21-7.21a.99.99 0 0 0 .29-.699V6.989A.99.99 0 0 0 18.511 6h-5.523a.984.984 0 0 0-.698.29v0Z"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgTags;
