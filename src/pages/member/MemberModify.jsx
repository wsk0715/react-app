import MemberForm from "../../components/member/MemberForm";
import { patchRequest } from "../../utils/ajax/httpRequest";
import { useEffect } from "react";
import { isValid, loadMemberInfo } from "../../utils/member/memberUtils";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import { useCustomData, useCustomProp } from "../../utils/hooks";
import useAuthStore from "../../store/authStore";

export default function MemberModify() {
  const title = '회원 정보 수정';

  const { loginId } = useAuthStore();
  const memberState = useCustomData([
    useCustomProp('memberId'),
    useCustomProp('memberPw'),
    useCustomProp('memberName'),
    useCustomProp('memberEmail')
  ])
  const props = memberState.props;
  const navigate = useNavigate();

  useEffect(() => {
    loadMemberInfo(loginId, props);
  }, [loginId]);

  const actions = {
    handleSubmit: async (event) => {
      event.preventDefault();
      if (!isValid(props)) {
        alert('입력 형식이 올바르지 않습니다.');
        return;
      }
      try {
        const member = memberState.toData();
        const response = await patchRequest(`/members/${ loginId }`, member);
        if (response.result) {
          alert('회원 정보 수정이 완료되었습니다.');
          navigate('/member/detail');
        } else {
          alert('회원 정보 수정에 실패했습니다. 다시 시도해주세요.');
        }
      } catch (e) {
        console.log(e);
        alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
      }
    },
    handleCancel: () => {
      navigate('/member/detail');
    }
  }


  return (
      <MemberForm title={ title }>
        <form onSubmit={ actions.handleSubmit }>
          {
            props.map(
                (ignored, index) => {
                  const prop = props[index];
                  const value = prop.state.value;
                  const readOnly = prop.state.name === 'memberId';
                  return (
                      <Input key={ index }
                             prop={ prop }
                             value={ value }
                             onBlur={ true }
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
