import React, {useState} from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth,signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.scss";



const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      await auth.signInWithEmailAndPassword(email, password)
      setEmail('');
      setPassword('');
    }catch(error) {
      console.log(error)
    }

  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswowrdChange = (e) => {
    setPassword(e.target.value)
  }


  return(
    <div className='sign-in'>
      <h1 className='title'>I already have an account</h1>
      <span>Sign in with your email and pasword</span>

      <form onSubmit={handleSubmit} >
        <FormInput name='email'
         type='email'
         value={email}
         handleChange={handleEmailChange}
         required
         label='email'
        />
        <FormInput name='password'
         type='password'
         value={password}
         handleChange={handlePasswowrdChange}
         required
         label='password'
        />
        <div className='buttons'>
          <CustomButton type='submit' text='SIGN IN' />
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn text='SIGN IN WITH GOOGLE' />
        </div>
      </form>
    </div>
  );
}



export default SignIn;