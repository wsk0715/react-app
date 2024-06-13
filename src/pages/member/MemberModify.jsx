import MemberForm from "../../components/member/MemberForm";
import { patchRequest } from "../../utils/httpRequest";
import { useEffect, useState } from "react";
import { handleInputChange, loadMemberInfo } from "../../utils/member/memberUtils";
import InputText from "../../components/common/InputText";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";


const sessionMemberId = sessionStorage.getItem('memberId');
const title = '회원정보수정';
const inputNames = ['memberId', 'memberPw', 'memberName', 'memberEmail'];
const displayNames = ['아이디', '비밀번호', '이름', '이메일'];
const postfixes = ['를', '를', '을', '을'];

export default function MemberModify() {
	const navigate = useNavigate();
	let [member, setMember] = useState({
		memberId: '',
		memberPw: '',
		memberName: '',
		memberEmail: '',
	})

	useEffect(() => {
		loadMemberInfo(sessionMemberId, setMember);
	}, [sessionMemberId]);/**/

	const actions = {
		handleSubmit: async function () {
			try {
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
			{
				inputNames.map(
					(inputName, i) => {
						const inputInfo = {
							displayName: displayNames[i],
							postfix: postfixes[i],
							handleInputChange: handleInputChange(member, setMember, inputNames[i]),
							value: member[inputNames[i]],
						}
						if (inputNames[i] == 'memberId') {
							inputInfo['readOnly'] = true;
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