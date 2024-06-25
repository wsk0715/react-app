import MemberForm from "../../components/member/MemberForm";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../../utils/ajax/httpRequest";
import { useCustomData, useCustomProp } from "../../utils/hooks";
import Input from "../../components/common/Input";


export default function Register() {
  const title = '회원 가입';

  const navigate = useNavigate();
  const memberState = useCustomData([
    useCustomProp('memberId', ''),
    useCustomProp('memberPw', ''),
    useCustomProp('memberName', ''),
    useCustomProp('memberEmail', ''),
  ]);
  const props = memberState.props;

  const actions = {
    handleSubmit: async (event) => {
      event.preventDefault();
      try {
        const member = memberState.toData()
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
            props.map(
                (ignored, index) => {
                  const prop = props[index];
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
