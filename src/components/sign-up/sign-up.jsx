import React, {useState} from "react";

import FormInput from "../form-input/form-input"
import CustomButton from "../custom-button/custom-button";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.scss"

const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }

    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, {displayName})

      setDisplayName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    }catch (error) {
      console.log(error)
    }
  }

  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
  }

  return (
    <div className ='sign-up'>
      <h1 className='title'>I don't have an account</h1>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit} >
        <FormInput name='displayName'
          type='text'
          value={displayName}
          handleChange={handleDisplayNameChange}
          required
          label='Display Name'
        />
        <FormInput name='email'
          type='email'
          value={email}
          handleChange={handleEmailChange}
          required
          label='Email'
        />
        <FormInput name='password'
          type='password'
          value={password}
          handleChange={handlePasswordChange}
          required
          label='Password'
        />
        <FormInput name='confirmPassword'
          type='password'
          value={confirmPassword}
          handleChange={handleConfirmPasswordChange}
          required
          label='Confirm Password'
        />
        <CustomButton type='submit' text='SIGN UP' />
      </form>
    </div>
  )
}

export default SignUp;