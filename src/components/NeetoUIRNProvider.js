import * as React from "react";
import PropTypes from "prop-types";
import { EventEmitter } from "events";
import { TouchableWithoutFeedback } from "react-native";

import { RootViewContext } from "@contexts";

export const NeetoUIRNProvider = ({ children }) => {
  const rootViewEvent = new EventEmitter();
  return (
    <RootViewContext.Provider value={{ rootViewEvent }}>
      <TouchableWithoutFeedback onPress={() => rootViewEvent.emit("pressed")}>
        {children}
      </TouchableWithoutFeedback>
    </RootViewContext.Provider>
  );
};

NeetoUIRNProvider.propTypes = {
  children: PropTypes.node,
};
