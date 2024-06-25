import MemberForm from "../../components/member/MemberForm";
import Button from "../../components/common/Button";
import { deleteRequest } from "../../utils/ajax/httpRequest";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loadMemberInfo } from "../../utils/member/memberUtils";
import InputText from "../../components/common/Input";
import { useCustomData, useCustomProp } from "../../utils/hooks";
import useAuthStore from "../../store/authStore";


export default function MemberDetail() {
  const title = '회원 상세 정보';
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
    handleModify: () => {
      navigate('/member/modify');
    },
    handleDelete: async () => {
      if (window.confirm('정말 탈퇴하시겠습니까?')) {
        try {
          const response = await deleteRequest(`/members/${ loginId }`);
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
          props.map(
              (ignored, index) => {
                const prop = props[index]
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
