import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgHtml = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m7.193 6 .375 6h6.86l-.198 3.162L12 15.8l-2.23-.637L9.697 14H7.695l.168 2.697L12 17.881l4.137-1.184.42-6.697h-7.11l-.125-2h7.36l.125-2H7.193ZM2.936 2l1.11 17.768L12 22.039l7.953-2.271L21.064 2H2.936Zm2.128 2h13.872l-.89 14.232L12 19.961l-6.047-1.729L5.064 4Z"
      fill="#68737D"
    />
  </Svg>
);

export default SvgHtml;
