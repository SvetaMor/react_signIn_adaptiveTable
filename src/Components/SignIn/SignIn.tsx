import React from 'react';
import {connect} from 'react-redux';
import SignInForm from './SignInForm';
import {ISignInProps} from '../../entities/ISignIn/ISignInProps';
import {SIGN_IN} from '../../constants/reducers';
 
const SignIn = (props: ISignInProps) => 
{
  const handleSubmit = (values: any) => {    
    props.login(values);
  }
  return (
    <SignInForm onSubmit={handleSubmit}/>
  )
}

const mapDispachToProps = (dispatch: any) => {
  return {
    login: (values: any) => dispatch({ type: SIGN_IN, values: values })
  };
};

export default connect(null, mapDispachToProps)(SignIn);
