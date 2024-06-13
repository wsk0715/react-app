import MemberForm from "../../components/member/MemberForm";
import Button from "../../components/common/Button";
import { deleteRequest } from "../../utils/httpRequest";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadMemberInfo } from "../../utils/member/memberUtils";
import InputText from "../../components/common/InputText";


const sessionMemberId = sessionStorage.getItem('memberId');
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

	const actions = {
		handleModify: function () {
			navigate('/member/modify');
		},
		handleDelete: async function () {
			if (window.confirm('정말 탈퇴하시겠습니까?')) {
				try {
					const response = await deleteRequest(`/members/${ sessionMemberId }`);
					console.log(response);
					if (response.result) {
						sessionStorage.clear();
						alert('회원 탈퇴가 완료되었습니다.');
						window.location.href = '/';
					} else {
						alert('회원 탈퇴에 실패했습니다. 다시 시도해주세요.');
					}
				} catch (e) {
					console.log(e);
					alert('회원 탈퇴에 실패했습니다. 다시 시도해주세요.');
				}
			}
		}
	}


	return (
		<MemberForm title={ title }>
			{
				inputNames.map(
					(inputName, i) => {
						const inputInfo = {
							displayName: displayNames[i],
							value: member[inputNames[i]],
							readOnly: true,
						};
						return (
							<InputText key={ i } inputInfo={ inputInfo } />
						);
					}
				)
			}
			<div>
				<Button type={ "submit" } label={ "수정" } action={ actions.handleModify } />
				<Button type={ "button" } label={ "탈퇴" } action={ actions.handleDelete } />
			</div>
		</MemberForm>
	);
}
