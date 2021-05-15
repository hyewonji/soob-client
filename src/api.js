import axios from 'axios';


export async function postSignup({ account_id, email, nickname, password, confirmPassword }) {
  const url = "http://localhost:4000/accounts";
  console.log(url)

  const response = await axios.post(url,
      account_id,
      email,
      nickname,
      password,
      confirmPassword
  )
  return response;
}

export const url = "http://ec2-3-36-81-228.ap-northeast-2.compute.amazonaws.com/api/v1/accounts/send-signup-email/"
