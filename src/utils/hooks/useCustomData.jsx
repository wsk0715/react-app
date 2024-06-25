const useCustomData = (props) => {
  const toData = () => {
    return props.reduce((acc, prop) => {
      acc[prop.state.name] = prop.state.value;
      return acc;
    }, {});
  };

  console.log(props)  // test

  return {
    props,
    toData,
  }
}

export default useCustomData;
