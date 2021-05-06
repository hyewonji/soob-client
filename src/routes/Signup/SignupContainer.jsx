import React, {useState} from "react";

import SignupPresenter from './SignupPresenter';

import { isEmail, isNickname, isPassword, isConfirmPassword } from '../../components/Validation';

import { useDispatch, useStore } from 'react-redux';

import { requestSignup } from "../../redux/actions";


export default function SignupContainer() {
  const [iEmail, setIEmail] = useState("")
  const [iNickname, setINickname] = useState("")
  const [iPassword, setIPassword] = useState("")
  const [iConfirmPassword, setIConfromPassword] = useState("")
  const [error, setError] = useState({
    email:"",
    nickname:"",
    password:"",
    confirmPassword:""
  })


  const handleChange = (e) => {
    const id = e.target.id;
    if(id === "email"){
      setIEmail(e.target.value)
      setError({
        ...error,
        email: isEmail(iEmail)
    })}
    
    if(id === "nickname"){
      setINickname(e.target.value)
      setError({
        ...error,
        nickname: isNickname(iNickname)
      })}

    if(id === "password"){
      setIPassword(e.target.value)
      setError({
        ...error,
        password: isPassword(iPassword)
    })} 
    
    if(id === "confirmPassword"){  
      setIConfromPassword(e.target.value)
      console.log(iConfirmPassword)   
      setError({
        ...error,
        confirmPassword: isConfirmPassword(iPassword, iConfirmPassword)
      }) 
    }
    console.log(error);
    
  }

  const handleEmail = () =>{
    console.log(iEmail);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const account_id = 4
  };

  return(
    <SignupPresenter
    onChange={handleChange}
    onSubmit={handleSubmit}
    error={error}
    onEmail={handleEmail}
    />
  );
}