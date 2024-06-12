import MemberForm from "../../components/member/MemberForm";
import { useState } from "react";
import { postRequest } from "../../utils/httpRequest";

export default function Register() {
	const [memberId, setMemberId] = useState('');
	const [memberPw, setMemberPw] = useState('');
	const [memberName, setMemberName] = useState('');
	const [memberEmail, setMemberEmail] = useState('');

	const pageInfo = {
		title: '회원가입',
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
				await postRequest('/member/', member);
			} catch (e) {
				console.log(e);
			}
		},
		handleCancel: function () {
			window.location.href = '/';
		},
	}


	return (
		<MemberForm pageInfo={ pageInfo } />
	);
}
