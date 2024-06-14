import MemberForm from "../../components/member/MemberForm";
import { patchRequest } from "../../utils/httpRequest";
import { useEffect } from "react";
import { loadMemberInfo } from "../../utils/member/memberUtils";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import Member from "../../states/Member";


const title = '회원정보수정';
const sessionMemberId = sessionStorage.getItem('memberId');
export default function MemberModify() {
	const navigate = useNavigate();
	const memberState = Member();
	const properties = memberState.properties;

	useEffect(() => {
		loadMemberInfo(sessionMemberId, properties);
	}, [sessionMemberId]);/**/

	const actions = {
		handleSubmit: async function (event) {
			event.preventDefault();
			try {
				const member = memberState.getObject();
				const response = await patchRequest(`/members/${ sessionMemberId }`, member);
				console.log(response);
				if (response.result) {
					alert('회원 정보 수정이 완료되었습니다.');
					navigate('/member/detail');
				} else {
					alert('회원 정보 수정에 실패했습니다. 다시 시도해주세요.');
				}
			} catch (e) {
				console.log(e);
				alert('회원 정보 수정에 실패했습니다. 다시 시도해주세요.');
			}
		},
		handleCancel: function () {
			navigate('/member/detail');
		}
	}


	return (
		<MemberForm title={ title }>
			<form onSubmit={ actions.handleSubmit }>
				{
					properties.map(
						(ignored, index) => {
							const prop = properties[index];
							console.log(prop)
							const value = prop.state.value;
							const readOnly = prop.state.name === 'memberId';
							return (
								<Input key={ index }
											 prop={ prop }
											 value={ value }
											 placeholder={ true }
											 readOnly={ readOnly } />
							);
						}
					)
				}
				<div>
					<Button type={ "submit" } label={ "확인" } />
					<Button type={ "button" } label={ "취소" } action={ actions.handleCancel } />
				</div>
			</form>
		</MemberForm>
	);
}
