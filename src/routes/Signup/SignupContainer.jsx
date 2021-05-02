import React from 'react';
import styled from 'styled-components'
import { useForm } from 'react-hook-form';

function SignupContainer () {

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => {
      const { email, nickname, password, confirmPassword } = values;
  };

  const SignupForm = styled.form``
  const Input = styled.input``
  const SubmitButton = styled.button``

  return (
    <SignupForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="email"
        placeholder="이메일"
        {...register("message", {
            required: "Required",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              }
          })}
      />
      <Input
        name="password"
        placeholder="패스워드"
        type="password"
        {...register("message", {
            required: "Required",
            validate: value => value !== "admin" || "Nice try!",
        })}
      />
      <SubmitButton type="submit">회원가입</SubmitButton>
    </SignupForm>
  );
}

export default SignupContainer;