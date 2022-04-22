import * as React from "react";
import PropTypes from "prop-types";
import { EventEmitter } from "events";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { runOnJS } from "react-native-reanimated";

import { ProviderContext } from "@contexts";

export const NeetoUIRNProvider = ({ children }) => {
  const providerEvent = new EventEmitter();
  const emitEvent = eventName => providerEvent.emit(eventName);
  const gesture = Gesture.Tap().onFinalize(() => {
    runOnJS(emitEvent)("pressed");
  });

  return (
    <ProviderContext.Provider value={{ providerEvent }}>
      <GestureDetector gesture={gesture}>{children}</GestureDetector>
    </ProviderContext.Provider>
  );
};

NeetoUIRNProvider.propTypes = {
  children: PropTypes.node,
};
