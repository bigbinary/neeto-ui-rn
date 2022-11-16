/* @flow */

import React from "react";

type Props = {
  color: string,
};

const IphoneIcon = ({ color }: Props) => (
  <svg height="23px" viewBox="0 0 20 23" width="20px">
    <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
      <g
        fill={color}
        id="Store-Icons"
        transform="translate(-40.000000, -108.000000)"
      >
        <g
          id="circ_iPhone_download"
          transform="translate(25.000000, 99.000000)"
        >
          <path
            d="M16.7193074,9 C15.7697602,9 15,9.83217005 15,10.8627041 L15,30.1372959 C15,31.166039 15.7689087,32 16.7193074,32 L25.2806926,32 C26.2302398,32 27,31.16783 27,30.1372959 L27,10.8627041 C27,9.83396103 26.2310913,9 25.2806926,9 L16.7193074,9 L16.7193074,9 Z M16.125,12.0163934 L16.125,28.9836066 L25.875,28.9836066 L25.875,12.0163934 L16.125,12.0163934 L16.125,12.0163934 Z M21,31.2459016 C21.4142136,31.2459016 21.75,30.9082803 21.75,30.4918033 C21.75,30.0753263 21.4142136,29.7377049 21,29.7377049 C20.5857864,29.7377049 20.25,30.0753263 20.25,30.4918033 C20.25,30.9082803 20.5857864,31.2459016 21,31.2459016 L21,31.2459016 Z M19.5,10.5081967 C19.5,10.7164352 19.6289062,10.8852459 19.7986193,10.8852459 L22.2013807,10.8852459 C22.3663036,10.8852459 22.5,10.7103452 22.5,10.5081967 C22.5,10.2999582 22.3710938,10.1311475 22.2013807,10.1311475 L19.7986193,10.1311475 C19.6336964,10.1311475 19.5,10.3060483 19.5,10.5081967 Z"
            id="IPhone-Vector-2"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default IphoneIcon;
