export default function InputText({ inputInfo }) {
	const inputName = inputInfo.inputName;
	const displayName = inputInfo.displayName;
	const placeholder = displayName + inputInfo.postfix;
	const handleInputChange = inputInfo.handleInputChange
	const value = inputInfo.value;
	const readOnly = inputInfo.readOnly;

	let className =
		'w-full max-w-96 ' +
		'mx-2 border border-gray-300 rounded-md p-2 pl-4 ' +
		'focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
	if (readOnly) {
		className += ` bg-gray-200`;
	}


	return (
		<div className="flex mb-4">
			<label className="content-center w-1/4" htmlFor="inputName">{ displayName }</label>
			<input name={ inputName }
						 type="text"
						 className={ className }
						 placeholder={ `${ placeholder } 입력해주세요.` }
						 value={ value }
						 onChange={ handleInputChange }
						 readOnly={ readOnly }
			/>
		</div>
	);
}
