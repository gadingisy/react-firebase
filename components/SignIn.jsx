import React, { useState, useEffect } from 'react';
import { PageHeader,Input,Button } from 'antd';
import { auth } from '../firebase'


const SignIn = (props) => {

    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const onEmailChange = (event) => setEmail(event.target.value)
    const onPasswordChange = (event) => setPassword(event.target.value)

    const onSignIn = () =>{
        
        auth.signInWithEmailAndPassword(email, password)
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
            
                    title="Sign In"
                
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
        <a href="./sign_up" style={{float:"left"}}>Make an account, Click Here.</a>
      </div>

        <div>   
                <div className="post_input_button">
                <Button type="primary" size="large" onClick={onSignIn}>Login</Button>        
                </div>
        </div>


        </div>
    </div>
    )
}

export default SignIn;

