import axios from 'axios';


export async function postSignup({ account_id, email, nickname, password, confirmPassword }) {
  const url = "http://localhost:4000/accounts";
  console.log(url)

  const response = await axios.post(url,
    ...{
      account_id,
      email,
      nickname,
      password,
      confirmPassword
    }
  )
  return response;
}