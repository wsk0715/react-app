import InputText from "../common/InputText";
import ButtonSubmit from "../common/ButtonSubmit";
import ButtonCancel from "../common/ButtonCancel";

export default function MemberForm({ pageInfo, setMember }) {
	const title = pageInfo.title;
	const inputNames = pageInfo.inputNames;
	const displayNames = pageInfo.displayNames;
	const postfixes = pageInfo.postfixes;


	return (
		<div className="flex flex-col items-center min-h-[28rem]">
			<div className="flex-grow w-2/3 max-w-[40rem] h-full p-8 border-2 rounded-md bg-gray-100 text-center ">
				<h1 className="text-2xl w-full text-center">{ title }</h1>
				<hr className="my-8" />
				<div>
					{
						inputNames.map((inputName, index) => {
							const inputInfo = {
								inputName: inputName,
								displayName: displayNames[index],
								postfix: postfixes[index],
							}
							return (
								<InputText key={ index } inputInfo={ inputInfo } />
							);
						})
					}
				</div>
				<div>
					<ButtonSubmit label={ "확인" } />
					<ButtonCancel label={ "취소" } />
				</div>
			</div>
		</div>
	);
}
