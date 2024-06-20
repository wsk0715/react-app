import { useState } from "react";

const State = (name) => {
  const [value, setter] = useState('');

  return {
    name: name,
    value: value,
    set: (value) => {
      setter(value);
    }
  }
}

export default State;
