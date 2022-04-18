import * as React from "react";
import PropTypes from "prop-types";
import { EventEmitter } from "events";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { runOnJS } from "react-native-reanimated";

import { RootViewContext } from "@contexts";

export const NeetoUIRNProvider = ({ children }) => {
  const rootViewEvent = new EventEmitter();

  const emitEvent = eventName => rootViewEvent.emit(eventName);

  const gesture = Gesture.Tap().onTouchesUp(() => {
    runOnJS(emitEvent)("pressed");
  });

  return (
    <RootViewContext.Provider value={{ rootViewEvent }}>
      <GestureDetector gesture={gesture}>{children}</GestureDetector>
    </RootViewContext.Provider>
  );
};

NeetoUIRNProvider.propTypes = {
  children: PropTypes.node,
};
