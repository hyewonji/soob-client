const initialState = {
    account: {
      email: "",
      nickname: "",
      password: null,
      confirmpassword: null
    },
  }
  
function reducer (state = initialState, action) {
    switch (action.type) {
        case "SINGUP":
            const { email, nickname, password, confirmpassword } = action.payload;
            return {
                ...state,
                account: {
                    email,
                    nickname,
                    password,
                    confirmpassword
                },
            }
        default : 
            return state
    }
}

export default reducer;