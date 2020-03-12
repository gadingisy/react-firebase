import React, { useState, useEffect } from 'react';
import { PageHeader,Input,Button } from 'antd';
import { auth } from '../firebase'


const SignUp = (props) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const onEmailChange = (event) => setEmail(event.target.value)
    const onPasswordChange = (event) => setPassword(event.target.value)

    const onSignUp = () =>{
    console.log('sign up');
    console.log(email, password);

    auth.createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

    }

    return(
    <div className="signup_container">
            <div className="page_header_container">
            <PageHeader
                    style={{
                    border: '1px solid rgb(235, 237, 240)',
                    }}
            
                    title="Sign Up"
                
        />
        </div>
        <div className="sign_up_containers_input">
        <div className="post_input_container">
                <div className="post_input_title">
                    <h2>E-mail</h2>
                </div>
                <div className="post_input">
                        <Input placeholder="E-mail Address" onChange={onEmailChange}/>
                </div>
          </div>
          
          <div className="post_input_container">
                <div className="post_input_title">
                    <h2>Password</h2>
                </div>
                <div className="post_input">
                        <Input.Password placeholder="Password" onChange={onPasswordChange}/>
                </div>
          </div>

        <div>   

                <div>
                    <a href="/sign_in" style={{float:"left"}}>Already have an account? Click Here to Login.</a>
                </div>

                <div className="post_input_button">
                <Button type="primary" size="large" onClick={onSignUp}>Sign-Up</Button>        
                </div>

        </div>


        </div>
    </div>
    )
}

export default SignUp;

