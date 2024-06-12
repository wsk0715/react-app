import InputText from "./InputText";
import ButtonSubmit from "./ButtonSubmit";
import ButtonCancel from "./ButtonCancel";

export default function InputForm({ pageInfo }) {
	const inputNames = pageInfo.inputNames;
	const displayNames = pageInfo.displayNames;
	const postfixes = pageInfo.postfixes;
	const setters = pageInfo.setters;
	const handleInputChange = pageInfo.handleInputChange;
	const handleSubmit = pageInfo.handleSubmit;
	const handleCancel = pageInfo.handleCancel;


	return (
		<div>
			<div>
				{
					inputNames.map((inputName, index) => {
						const inputInfo = {
							inputName: inputName,
							displayName: displayNames[index],
							postfix: postfixes[index],
							handleInputChange: handleInputChange(setters[index]),
						}
						return (
							<InputText key={ index } inputInfo={ inputInfo } />
						);
					})
				}
			</div>
			<div>
				<ButtonSubmit label={ "확인" } action={ handleSubmit } />
				<ButtonCancel label={ "취소" } action={ handleCancel } />
			</div>
		</div>
	);
}
