function requestSignup ({ email, nickname, password, confirmpassword }) {
    return {
      type: 'SIGNUP',
      payload: { email, nickname, password, confirmpassword },
    }
  }
  
export default requestSignup;