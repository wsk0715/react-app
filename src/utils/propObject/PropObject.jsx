import Property from "./Property";

const createPropObject = (properties, propertyNames) => {
	const props = propertyNames.map(name => {
		const [displayName, postfixObject, postfixSubject, maxLength] = properties[name];
		return Property(name, displayName, postfixObject, postfixSubject, maxLength);
	});

	const getDataObject = () => {
		const dataObj = {};
		props.forEach(prop => {
			dataObj[prop.state.name] = prop.state.value;
		})
		return dataObj;
	};

	return {
		props,
		getDataObject,
	}
}

export default createPropObject;
