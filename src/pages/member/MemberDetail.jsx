import MemberForm from "../../components/member/MemberForm";
import Button from "../../components/common/Button";
import { deleteRequest } from "../../utils/httpRequest";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loadMemberInfo } from "../../utils/member/memberUtils";
import InputText from "../../components/common/Input";
import Member from "../../states/Member";


const title = '회원 상세 정보';
const sessionMemberId = sessionStorage.getItem('memberId');
export default function MemberDetail() {
	const navigate = useNavigate();
	const memberState = Member();
	const properties = memberState.properties;

	useEffect(() => {
		loadMemberInfo(sessionMemberId, properties);
	}, [sessionMemberId]);

	const actions = {
		handleModify: function () {
			navigate('/member/modify');
		},
		handleDelete: async function () {
			if (window.confirm('정말 탈퇴하시겠습니까?')) {
				try {
					const response = await deleteRequest(`/members/${ sessionMemberId }`);
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
				properties.map(
					(ignored, index) => {
						const prop = properties[index]
						return (
							<InputText key={ index }
												 prop={ prop }
												 value={ prop.state.value }
												 onblur={ false }
												 readOnly={ true } />
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
