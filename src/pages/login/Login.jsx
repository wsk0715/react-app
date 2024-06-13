import MemberForm from "../../components/member/MemberForm";
import Button from "../../components/common/Button";
import { handleInputChange } from "../../utils/member/memberUtils";
import InputText from "../../components/common/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../../utils/httpRequest";


const title = '회원 로그인';
const inputNames = ['memberId', 'memberPw'];
const displayNames = ['아이디', '비밀번호'];
const postfixes = ['를', '를'];

export default function Login() {
	const navigate = useNavigate();
	let [member, setMember] = useState({
		memberId: '',
		memberPw: '',
	})

	const actions = {
		handleSubmit: async function () {
			const response = await postRequest('/login', member);
			console.log(response)
			switch (response.result) {
				case 'FAILED_ID':
					alert('해당하는 아이디가 없습니다.');
					break;
				case 'FAILED_PW':
					alert('비밀번호가 일치하지 않습니다.')
					break;
				case 'SUCCESS':
					sessionStorage.setItem('memberId', member.memberId);
					sessionStorage.setItem('token', response.token);
					alert('로그인 성공!');
					window.location.href = '/';
			}
		},

		handleCancel: function () {
			navigate('/');
		}
	}


	return (
		<MemberForm title={ title }>
			{
				inputNames.map((inputName, i) => {
					const inputInfo = {
						inputName: inputNames[i],
						displayName: displayNames[i],
						placeholder: displayNames[i] + postfixes[i],
						handleInputChange: handleInputChange(member, setMember, inputNames[i]),
					};
					if (inputName === 'memberPw') {
						inputInfo['inputType'] = 'password';
					}
					return (
						<InputText key={ i } inputInfo={ inputInfo } />
					);
				})
			}
			<div>
				<Button type={ "submit" } label={ "로그인" } action={ actions.handleSubmit } />
				<Button type={ "button" } label={ "취소" } action={ actions.handleCancel } />
			</div>
		</MemberForm>
	);
}
