import { useEffect, useState } from "react";

export const useSingleton = initialValue => {
  let _updaters = [];
  let _value = initialValue;

  const useSingleton = () => {
    const [value, update] = useState(_value);

    useEffect(() => {
      _updaters.push(update);
      return () => (_updaters = _updaters.filter(el => el !== update));
    }, []);

    return value;
  };

  const updateSingleton = updateValue => {
    _value =
      typeof updateValue === "function" ? updateValue(_value) : updateValue;
    // eslint-disable-next-line promise/prefer-await-to-callbacks
    _updaters.forEach(cb => cb(_value));
  };

  return [useSingleton, updateSingleton];
};
