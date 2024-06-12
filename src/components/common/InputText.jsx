export default function InputText({ inputInfo }) {
	const inputName = inputInfo.inputName;
	const displayName = inputInfo.displayName;
	const placeholder = displayName + inputInfo.postfix;


	return (
		<div className="flex mb-4">
			<label className="content-center w-1/4" htmlFor="inputName">{ displayName }</label>
			<input id={ inputName }
						 name={ inputName }
						 type="text"
						 className="w-full max-w-96 mx-2 border border-gray-300 rounded-md p-2 pl-4
												focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
						 placeholder={ `${ placeholder } 입력해주세요.` }
			/>
		</div>
	);
}
