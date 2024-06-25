import Property from "./property";

const properties = {
  memberId: Property('아이디', '를', '는', 20),
  memberPw: Property('비밀번호', '를', '는', 100),
  memberName: Property('이름', '을', '은', 10),
  memberEmail: Property('이메일', '을', '은', 20),
};

const getProperty = (state) => {
  return properties[state];
}

export { properties, getProperty };
