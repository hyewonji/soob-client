import axios from 'axios';

// 로그인 요청 함수 => 서버에 요청하면 데이터
// success/ fail message data 에 담겨서 넘어옴
// JWT token

export async function postSignup({ account_id, email, password, nickname, password, confirmPassword }) {
  const url = "http://localhost:4000/accounts";
  const response = await axios.post(url, {
    data: { 
        account_id,
        email,
        nickname,
        password,
        confirmPassword
    },
  });
  const { data } = response;
  return data;
}