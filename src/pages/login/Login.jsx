import MemberForm from "../../components/member/MemberForm";
import Button from "../../components/common/Button";
import InputText from "../../components/common/Input";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../../utils/httpRequest";
import Member from "../../states/Member";


const title = '회원 로그인';
export default function Login() {
	const navigate = useNavigate();
	const memberState = Member();
	const properties = memberState.properties;

	const actions = {
		handleSubmit: async function (event) {
			event.preventDefault();
			let isValid = true;
			properties.forEach((prop) => {
				if (prop.message.value) {
					isValid = false;
				}
			});
			if (!isValid) {
				alert('입력 형식이 올바르지 않습니다.');
				return;
			}
			
			try {
				const member = memberState.getObject()
				const response = await postRequest('/login',
					{
						memberId: member.memberId,
						memberPw: member.memberPw,
					});
				switch (response.result) {
					case 'FAILED_ID':
						alert('해당하는 아이디가 없습니다.');
						break;
					case 'FAILED_PW':
						alert('비밀번호가 일치하지 않습니다.')
						break;
					case 'SUCCESS':
						sessionStorage.setItem('memberId', member.memberId);
						sessionStorage.setItem('token', response.token);
						alert('로그인 성공!');
						window.location.href = '/';
				}
			} catch (e) {
				console.log(e)
			}
		},

		handleCancel: function () {
			navigate('/');
		}
	}


	return (
		<MemberForm title={ title }>
			<form onSubmit={ actions.handleSubmit }>
				{
					properties.map((ignored, index) => {
						if (index > 1) {
							return null;
						}
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
