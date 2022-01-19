import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTablet = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18.418 3H6.628c-.61 0-1.105.495-1.105 1.105v15.79c0 .61.495 1.105 1.105 1.105h11.79c.61 0 1.105-.495 1.105-1.105V4.105c0-.61-.494-1.105-1.105-1.105ZM10.023 18.5h5"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgTablet;
