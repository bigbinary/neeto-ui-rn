import React from "react";
import PropTypes from "prop-types";

import { Carousel, Container } from "@components";

/**
 *
 * <div class="screenshots">
 *   <img src="screenshots/carousel/carousel.png" />
 * </div>
 *
 * This component supports below props categories from [styled-system ](/styled-system).
 * <ul>
 * <li>flexbox</li>
 * <li>space</li>
 * <li>border</li>
 * <li>layout</li>
 * <li>color</li>
 * <li>buttonStyle</li>
 * </ul>
 *
 *  ## Usage
 * ```js
 * import * as React from "react";
 * import { OnBoarding } from "@bigbinary/neetoui-rn";
 *
 * export default function Main() {
 *
 *  return (
 *    <OnBoarding
 *      appLogo={Neeto}
 *      slides={[
 *          {title: "Welcome to neetoInovice", description: "Enter your daily ...", illustration:""},
 *          {title: "", description: "", illustration:""}
 *      ]}
 *      onComplete={() =>{ console.log("Completed");}}
 * />
 *  );
 * }
 * ```
 *
 */

export const OnBoarding = ({ appLogo: AppLogo, slides, onComplete }) => {
  return (
    <Container flex={1}>
      <Container alignItems="center">
        <AppLogo />
      </Container>

      <Container justifyContent="center" alignItems="center">
        <Carousel itemArray={slides} fromOnBoarding onComplete={onComplete} />
      </Container>
    </Container>
  );
};

OnBoarding.propTypes = {
  appLogo: PropTypes.func.isRequired,
  slides: PropTypes.array.isRequired,
  onComplete: PropTypes.func.isRequired,
};
