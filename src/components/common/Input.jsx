export default function Input({ prop, type, value, placeholder, readOnly }) {
	placeholder = placeholder ? prop.displayName + prop.postfix + ' 입력해주세요.' : '';
	readOnly = !!readOnly;

	let className =
		'w-full max-w-96 ' +
		'mx-2 border border-gray-300 rounded-md p-2 pl-4 ' +
		'focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
	if (readOnly) {
		className += ` bg-gray-200`;
	}


	return (
		<div className="mb-4">
			<div className="flex">
				<label className="content-center w-1/4" htmlFor={ prop.state.name }>
					{ prop.displayName }
				</label>
				<input name={ prop.state.name }
							 type={ type }
							 className={ className }
							 value={ value }
							 onChange={ prop.inputChangeHandler }
							 onBlur={ prop.inputBlurHandler }
							 placeholder={ placeholder }
							 readOnly={ readOnly }
				/>
			</div>
			<div className="flex">
				<div className="w-1/4"></div>
				<div className="w-full max-w-96 h-4 mx-2 pr-2 pl-4 text-left text-red-500">{ prop.message.value }</div>
			</div>
		</div>
	);
}
