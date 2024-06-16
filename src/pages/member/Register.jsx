import MemberForm from "../../components/member/MemberForm";
import { postRequest } from "../../utils/ajax/httpRequest";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import Member from "../../states/Member";
import { isValid } from "../../utils/member/memberUtils";


const title = '회원 가입';
export default function Register() {
	const navigate = useNavigate();
	const memberState = Member();
	const properties = memberState.properties;

	const actions = {
		handleSubmit: async (event) => {
			event.preventDefault();
			if (!isValid(properties)) {
				alert('입력 형식이 올바르지 않습니다.');
				return;
			}
			try {
				const member = memberState.getObject()
				const response = await postRequest('/members', member);
				if (response.result) {
					alert('회원가입 성공!');
					navigate('/login');
				} else {
					alert('회원가입에 실패했습니다. 다시 시도해주세요.')
				}
			} catch (e) {
				console.log(e);
				alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
			}
		},
		handleCancel: () => {
			navigate('/');
		}
	}


	return (
		<MemberForm title={ title }>
			<form onSubmit={ actions.handleSubmit }>
				{
					properties.map(
						(ignored, index) => {
							const prop = properties[index];
							const type = prop.state.name === 'memberPw' ? 'password' : 'text';
							return (
								<Input key={ index }
											 prop={ prop }
											 onBlur={ true }
											 placeholder={ true }
											 type={ type } />
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
