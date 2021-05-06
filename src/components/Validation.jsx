export function isEmail(asValue) {
    let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if(regExp.test(asValue)){
        return ""
    } else {
        return "이메일 형식이 올바르지 않습니다."
    };
}

export function isNickname(asValue){
    let regExp = /[~!@#$%^&*()_+|<>?:{}]/;
    if(asValue.length >= 2 && asValue.length <= 8 && !regExp.test(asValue)){
        return ""
    } else {
        return "특수기호가 포함되지 않는 2~8자입니다"
    }
}

export function isPassword(asValue) {
    let regExp = /[~!@#$%^&*()_+|<>?:{}]/; //  8 ~ 10자 영문, 숫자 조합
    if (asValue.length >= 8 && asValue.length <= 20 &&!regExp.test(asValue)){
        return ""
    } else {
        return "특수기호가 포함되지 않는 8~20자입니다."
    }
}

export function isConfirmPassword(asValue, checkValue){
    if(asValue === checkValue){
        return ""
    } else {
        return "비밀번호가 일치하지 않습니다."
    }
}