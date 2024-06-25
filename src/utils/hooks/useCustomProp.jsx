import useCustomState from "./useCustomState";
import { getProperty } from "../properties/properties";

const useCustomProp = (name, initialValue = null) => {
  const state = useCustomState(name, initialValue);
  const properties = getProperty(name);
  const actions = {
    inputChangeHandler: (event) => {
      const value = event.target.value;
      state.set(value);
    },
    inputBlurHandler: () => {
      if (!state.value) {
        message.set(`${ properties.displayName + properties.postfixObject } 입력해주세요.`);
        return;
      }
      if (state.value.length > properties.maxLength) {
        message.set(`${ properties.displayName + properties.postfixSubject } 최대 ${ properties.maxLength }자까지 입력 가능합니다.`);
        return;
      }
      message.set('');
    },
  };
  const message = useCustomState('message', '');

  return {
    state,
    properties,
    actions,
    message,
  };
}

export default useCustomProp;
