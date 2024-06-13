import MemberForm from "../../components/member/MemberForm";
import Button from "../../components/common/Button";
import { deleteRequest } from "../../utils/httpRequest";
import { useEffect, useState } from "react";
import InputText from "../../components/common/InputText";
import { useNavigate } from "react-router-dom";
import { loadMemberInfo } from "../../utils/member/memberUtils";


const sessionMemberId = sessionStorage.getItem('id');
const title = '회원상세정보';
const inputNames = ['memberId', 'memberPw', 'memberName', 'memberEmail'];
const displayNames = ['아이디', '비밀번호', '이름', '이메일'];

export default function MemberDetail() {
	const navigate = useNavigate();
	let [member, setMember] = useState({
		memberId: '',
		memberPw: '',
		memberName: '',
		memberEmail: '',
	})

	useEffect(() => {
		loadMemberInfo(sessionMemberId, setMember);
	}, [sessionMemberId]);

	function handleModify() {
		navigate('/member/modify');
	}

	async function handleDelete() {
		if (window.confirm('정말 탈퇴하시겠습니까?')) {
			try {
				const response = await deleteRequest(`/members/${ sessionMemberId }`);
				console.log(response);
				if (response.result) {
					alert('회원 탈퇴가 완료되었습니다.');
					navigate('/');
				} else {
					alert('회원 탈퇴에 실패했습니다. 다시 시도해주세요.');
				}
			} catch (e) {
				console.log(e);
				alert('회원 탈퇴에 실패했습니다. 다시 시도해주세요.');
			}
		}
	}


	const memberInfo = [];
	for (let i = 0; i < inputNames.length; i++) {
		const inputInfo = {
			displayName: displayNames[i],
			value: member[inputNames[i]],
			readOnly: true,
		}
		memberInfo.push(
			<InputText key={ i } inputInfo={ inputInfo } />
		);
	}
	return (
		<MemberForm title={ title }>
			{ memberInfo }
			<div>
				<Button type={ "submit" } label={ "수정" } action={ handleModify } />
				<Button type={ "button" } label={ "탈퇴" } action={ handleDelete } />
			</div>
		</MemberForm>
	);
}
