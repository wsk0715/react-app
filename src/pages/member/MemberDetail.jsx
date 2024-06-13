import MemberForm from "../../components/member/MemberForm";
import ButtonSubmit from "../../components/common/ButtonSubmit";
import ButtonCancel from "../../components/common/ButtonCancel";
import { deleteRequest } from "../../utils/httpRequest";
import { useEffect, useState } from "react";
import { getMemberInfo } from "../../utils/member/memberUtils";
import InputText from "../../components/common/InputText";


const sessionMemberId = sessionStorage.getItem('id');
const title = '회원상세정보';
const inputNames = ['memberId', 'memberPw', 'memberName', 'memberEmail'];
const displayNames = ['아이디', '비밀번호', '이름', '이메일'];

export default function MemberDetail() {
	let [member, setMember] = useState({
		memberId: '',
		memberPw: '',
		memberName: '',
		memberEmail: '',
	})

	useEffect(() => {
		getMemberInfo(setMember, sessionMemberId);
	}, [sessionMemberId]);

	function handleModify() {
		window.location.href = '/member/modify';
	}

	async function handleDelete() {
		if (window.confirm('정말 탈퇴하시겠습니까?')) {
			try {
				const response = await deleteRequest(`/members/${ sessionMemberId }`);
				console.log(response)
				if (response.result) {
					alert('회원 탈퇴가 완료되었습니다.')
					window.location.href = '/';
				} else {
					alert('회원 탈퇴에 실패했습니다. 다시 시도해주세요.')
				}
			} catch (e) {
				console.log(e)
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
			<div>
				{ memberInfo }
				<div>
					<ButtonSubmit label={ "수정" } action={ handleModify } />
					<ButtonCancel label={ "탈퇴" } action={ handleDelete } />
				</div>
			</div>
		</MemberForm>
	);
}
