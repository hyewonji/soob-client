import React from 'react'
import styled from 'styled-components';

const SignupFrom = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const InputContainer = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-around;
`

const Label = styled.label``
const Input = styled.input``
const EmailSubmit = styled.div`
`

function SignupPresenter({onChange, onSubmit, error, onEmail}){

    //const dispatch = useDispatch();
    //const { register, handleSubmit, formState: { errors }, reset } = useForm();

    return(
        <SignupFrom onSubmit={onSubmit} >
            <InputContainer>
                <Label htmlFor="email">email</Label>
                <Input id="email" type="email" onChange={onChange} />
                <EmailSubmit onClick={onEmail}>이메일 중복 확인</EmailSubmit>
            </InputContainer>
            {error.email}
            <InputContainer>
                <Label htmlFor="nickname">nickname</Label>
                <Input id="nickname" onChange={onChange} type="text"/>
            </InputContainer>
            {error.nickname}
            <InputContainer>
                <Label htmlFor="password">password</Label>
                <Input id="password" type="password" onChange={onChange} />
            </InputContainer>
            {error.password}
            <InputContainer>
                <Label htmlFor="confirmPassword">confirmPassword</Label>
                <Input id="confirmPassword" type="password" onChange={onChange} />
            </InputContainer>
            {error.confirmPassword}
            <button type="submit">SUBMIT</button>
        </SignupFrom>
    )
}

export default SignupPresenter;