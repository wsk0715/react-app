import MemberForm from "../../components/member/MemberForm";
import { useState } from "react";
import { postRequest } from "../../utils/httpRequest";
import InputText from "../../components/common/Input";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import { handleInputChange } from "../../utils/member/memberUtils";


const title = '회원가입';
const inputNames = ['memberId', 'memberPw', 'memberName', 'memberEmail'];
const displayNames = ['아이디', '비밀번호', '이름', '이메일'];
const postfixes = ['를', '를', '을', '을'];

export default function Register() {
	const navigate = useNavigate();
	let [member, setMember] = useState({
		memberId: '',
		memberPw: '',
		memberName: '',
		memberEmail: '',
	})

	const actions = {
		handleSubmit: async function () {
			try {
				const response = await postRequest('/members', member);
				if (response.result) {
					alert('회원가입 성공!');
					navigate('/login');
				} else {
					alert('회원가입에 실패했습니다. 다시 시도해주세요.')
				}
			} catch (e) {
				console.log(e);
			}
		},
		handleCancel: function () {
			navigate('/');
		}
	}


	return (
		<MemberForm title={ title }>
			{
				inputNames.map(
					(inputName, i) => {
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
					}
				)
			}
			<div>
				<Button type={ "submit" } label={ "확인" } action={ actions.handleSubmit } />
				<Button type={ "button" } label={ "취소" } action={ actions.handleCancel } />
			</div>
		</MemberForm>
	);
}
