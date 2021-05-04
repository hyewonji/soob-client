import React from "react";
import styled from 'styled-components';
import { useForm } from "react-hook-form";


const SignupFrom = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Label = styled.label``
const Input = styled.input``

export default function SignupContainer() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const checkPassword = (password, confirmPassword) => {
    if (password === confirmPassword){
      return true;
    } else {
      return false;
    }
  }

  const onSubmit = data => {
    const { email, nickname, password, confirmPassword} = data;
    const Password = checkPassword(password,confirmPassword)
      
    if (Password){
      console.log(true)
    } else{
      console.log(false)
    }
    
    reset();
  };

  return (
    <SignupFrom onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="email">email</Label>
      <Input
        id="email"
        {...register("email", {
          required: "required",
          pattern: {
            value: /\S+@\S+.\S+/,
            message: "Entered value does not match email format"
          }
        })}
        type="email"
      />
      {errors.email && <span role="alert">{errors.email.message}</span>}
      <Label htmlFor="nickname">nickname</Label>
      <Input
        id="nickname"
        {...register("nickname", {
          required: "required",
          minLength: {
            value: 2,
            message: "min length is 2"
          },
          maxLength: {
            value: 8,
            message: "max length is 8"
          }
        })}
        type="text"
      />
      {errors.nickname && <span role="alert">{errors.nickname.message}</span>}
      <Label htmlFor="password">password</Label>
      <Input
        id="password"
        {...register("password", {
          required: "required",
          minLength: {
            value: 8,
            message: "min length is 8"
          },
          maxLength: {
            value: 20,
            message: "max length is 20"
          }
        })}
        type="password"
      />
      {errors.password && <span role="alert">{errors.password.message}</span>}
      <Label htmlFor="confirmPassword">confirmPassword</Label>
      <Input
        id="confirmPassword"
        {...register("confirmPassword", {
          required: "required",
        })}
        type="password"
      />
      {errors.confirmPassword && <span role="alert">{errors.confirmPassword.message}</span>}
      <button type="submit">SUBMIT</button>
    </SignupFrom>
  );
}