import MemberForm from "../../components/member/MemberForm";

export default function Register() {

	const pageInfo = {
		title: '회원가입',
		inputNames: ['memberId', 'memberPw', 'memberName', 'memberEmail'],
		displayNames: ['아이디', '비밀번호', '이름', '이메일'],
		postfixes: ['를', '를', '을', '을'],
	}


	return (
		<MemberForm pageInfo={ pageInfo } />
	);
}
