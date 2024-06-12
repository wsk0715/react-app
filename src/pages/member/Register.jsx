import MemberForm from "../../components/member/MemberForm";
import { useState } from "react";
import { postRequest } from "../../utils/httpRequest";
import InputForm from "../../components/common/InputForm";

export default function Register() {
	const [memberId, setMemberId] = useState('');
	const [memberPw, setMemberPw] = useState('');
	const [memberName, setMemberName] = useState('');
	const [memberEmail, setMemberEmail] = useState('');

	const title = '회원가입';

	const pageInfo = {
		inputNames: ['memberId', 'memberPw', 'memberName', 'memberEmail'],
		displayNames: ['아이디', '비밀번호', '이름', '이메일'],
		postfixes: ['를', '를', '을', '을'],
		setters: [setMemberId, setMemberPw, setMemberName, setMemberEmail],
		handleInputChange: function (setter) {
			return function (e) {
				setter(e.target.value);
			};
		},
		handleSubmit: async function () {
			const member = {
				memberId,
				memberPw,
				memberName,
				memberEmail,
			}
			try {
				const response = await postRequest('/members', member);
				if (response.result == true) {
					alert('회원가입 성공!');
					window.location.href = '/login';
				} else {
					alert('회원가입에 실패했습니다. 다시 시도해주세요.')
				}
			} catch (e) {
				console.log(e);
			}
		},
		handleCancel: function () {
			window.location.href = '/';
		},
	}


	return (
		<MemberForm title={ title }>
			<InputForm pageInfo={ pageInfo } />
		</MemberForm>
	);
}
