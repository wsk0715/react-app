import MemberForm from "../../components/member/MemberForm";
import Button from "../../components/common/Button";
import { deleteRequest } from "../../utils/ajax/httpRequest";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loadMemberInfo } from "../../utils/member/memberUtils";
import InputText from "../../components/common/Input";
import Member from "../../utils/propObject/PropObject";
import { memberProperties } from "../../utils/properties/properties";


const title = '회원 상세 정보';
const needProperties = ['memberId', 'memberPw', 'memberName', 'memberEmail'];
const sessionMemberId = sessionStorage.getItem('memberId');
export default function MemberDetail() {
	const navigate = useNavigate();
	const memberState = Member(memberProperties, needProperties);
	const properties = memberState.props;

	useEffect(() => {
		loadMemberInfo(sessionMemberId, properties);
	}, [sessionMemberId]);

	const actions = {
		handleModify: () => {
			navigate('/member/modify');
		},
		handleDelete: async () => {
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
					alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
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
