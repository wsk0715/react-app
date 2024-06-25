import { useState } from "react";

const useCustomState = (name, initialValue = null) => {
  const [value, set] = useState(initialValue);

  return {
    name,
    value,
    set,
  }
}

export default useCustomState;
