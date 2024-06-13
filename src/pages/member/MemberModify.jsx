import MemberForm from "../../components/member/MemberForm";
import ButtonSubmit from "../../components/common/ButtonSubmit";
import ButtonCancel from "../../components/common/ButtonCancel";
import { patchRequest } from "../../utils/httpRequest";
import { useEffect, useState } from "react";
import { getMemberInfo } from "../../utils/member/memberUtils";
import InputText from "../../components/common/InputText";


const sessionMemberId = sessionStorage.getItem('id');
const title = '회원정보수정';
const inputNames = ['memberId', 'memberPw', 'memberName', 'memberEmail'];
const displayNames = ['아이디', '비밀번호', '이름', '이메일'];
const postfixes = ['를', '를', '을', '을'];

export default function MemberModify() {
	let [member, setMember] = useState({
		memberId: '',
		memberPw: '',
		memberName: '',
		memberEmail: '',
	})

	useEffect(() => {
		getMemberInfo(setMember, sessionMemberId);
	}, [sessionMemberId]);

	function handleInputChange(inputName) {
		return function (e) {
			const newMember = {
				...member,
				[inputName]: e.target.value,
			};
			setMember(newMember);
		};
	}

	async function handleSubmit() {
		try {
			const response = await patchRequest(`/members/${ sessionMemberId }`, member);
			console.log(response)
			if (response.result) {
				alert('회원 정보 수정이 완료되었습니다.')
				window.location.href = '/member/detail';
			} else {
				alert('회원 정보 수정에 실패했습니다. 다시 시도해주세요.')
			}
		} catch (e) {
			console.log(e)
		}
	}

	function handleCancel() {
		window.location.href = '/member/detail';
	}

	const memberInfo = [];
	for (let i = 0; i < inputNames.length; i++) {
		const inputInfo = {
			displayName: displayNames[i],
			postfix: postfixes[i],
			handleInputChange: handleInputChange(inputNames[i]),
			value: member[inputNames[i]],
		}
		if (inputNames[i] == 'memberId') {
			inputInfo['readOnly'] = true;
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
					<ButtonSubmit label={ "확인" } action={ handleSubmit } />
					<ButtonCancel label={ "취소" } action={ handleCancel } />
				</div>
			</div>
		</MemberForm>
	);
}
