import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgImageUpload = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21 10v7c0 2.2-1.8 4-4 4H7l-.01-.001c-2.21-.01-4-1.8-4-4.01v-10a3.999 3.999 0 0 1 3.99-4.01h6"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m3 13 1.29-1.3h-.01c.94-.95 2.46-.95 3.4-.01l4.29 4.29M7.003 21l6.29-6.3v-.01c.94-.95 2.46-.95 3.4 0l3.93 3.93M18 3l-2.5 2.5M20.5 5.5 18 3M18 3v5"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgImageUpload;
