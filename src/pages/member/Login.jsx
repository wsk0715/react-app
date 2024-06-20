import MemberForm from "../../components/member/MemberForm";
import Button from "../../components/common/Button";
import InputText from "../../components/common/Input";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../../utils/ajax/httpRequest";
import Member from "../../utils/propObject/PropObject";
import { isValid } from "../../utils/member/memberUtils";
import { memberProperties } from "../../utils/properties/properties";
import useAuthStore from "../../store/authStore";


const title = '회원 로그인';
const needProperties = ['memberId', 'memberPw'];
export default function Login() {
	const { login } = useAuthStore();
	const navigate = useNavigate();
	const memberState = Member(memberProperties, needProperties);
	const properties = memberState.props;

	const actions = {
		handleSubmit: async (event) => {
			event.preventDefault();
			if (!isValid(properties)) {
				alert('입력 형식이 올바르지 않습니다.');
				return;
			}
			try {
				const member = memberState.getDataObject()
				const response = await postRequest('/login', member);
				switch (response.result) {
					case 'FAILED_ID':
						alert('해당하는 아이디가 없습니다.');
						break;
					case 'FAILED_PW':
						alert('비밀번호가 일치하지 않습니다.')
						break;
					case 'SUCCESS':
						const id = member.memberId;
						const token = response.token;
						alert('로그인 성공!');
						login(id, token);
						navigate('/');
				}
			} catch (e) {
				console.log(e)
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
					properties.map((ignored, index) => {
						const prop = properties[index];
						const type = prop.state.name === 'memberPw' ? 'password' : 'text';
						return (
							<InputText key={ index }
												 prop={ prop }
												 placeholder={ true }
												 type={ type } />
						);
					})
				}
				<div>
					<Button type={ "submit" } label={ "로그인" } />
					<Button type={ "button" } label={ "취소" } action={ actions.handleCancel } />
				</div>
			</form>
		</MemberForm>
	);
}
