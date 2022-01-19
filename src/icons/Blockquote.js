import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBlockquote = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M20.667 20.125H3.333m17.334-5.417H3.333m17.334-5.416h-4.333m4.333-5.417h-4.333M9.292 6.042H12c.299 0 .542.243.542.542V8.75a.542.542 0 0 1-.542.542H9.833a.542.542 0 0 1-.542-.542l.001-2.708Zm0 0c0-2.167.406-2.527 1.625-3.25m-7.584 3.25h2.708c.299 0 .542.243.542.542V8.75a.542.542 0 0 1-.542.542H3.875a.542.542 0 0 1-.542-.542V6.042Zm0 0c0-2.167.406-2.527 1.625-3.25"
      stroke="#323232"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgBlockquote;
