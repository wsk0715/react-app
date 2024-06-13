export default function Input({ inputInfo }) {
	const inputName = inputInfo.inputName;
	const inputType = inputInfo.inputType === undefined ? 'text' : inputInfo.inputType;
	const displayName = inputInfo.displayName;
	const value = inputInfo.value;
	const handleInputChange = inputInfo.handleInputChange;
	const placeholder = inputInfo.placeholder === undefined ? '' : inputInfo.placeholder + ' 입력해주세요.';
	const readOnly = inputInfo.readOnly === undefined ? false : inputInfo.readOnly;

	let className =
		'w-full max-w-96 ' +
		'mx-2 border border-gray-300 rounded-md p-2 pl-4 ' +
		'focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
	if (readOnly) {
		className += ` bg-gray-200`;
	}


	return (
		<div className="flex mb-4">
			<label className="content-center w-1/4" htmlFor={ inputName }>
				{ displayName }
			</label>
			<input name={ inputName }
						 type={ inputType }
						 className={ className }
						 value={ value }
						 onChange={ handleInputChange }
						 placeholder={ placeholder }
						 readOnly={ readOnly }
			/>
		</div>
	);
}
