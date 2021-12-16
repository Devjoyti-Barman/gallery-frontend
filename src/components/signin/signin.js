import './signin.css';
import {Link,useNavigate } from 'react-router-dom';
import { Button,Typography } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import EmailValidator  from 'email-validator';

import googleicon from '../../images/google-icon.png';
import { useState } from 'react';
import axios from 'axios';

function Signin(){
    
    const navigate = useNavigate();
    const localLoginURl='http://localhost:3000/auth/local';
    const googleLoginURL='http://localhost:3000/auth/google';

    const redirectToServiceSSO= async (authURL)=>{
        const newWindow=window.open(authURL,'_self','width:100%;height:100%');
    }

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    
    const chackParameter= ()=>{

        if( email.length === 0 ) return 'Enter your email';
        else if( EmailValidator.validate(email) ===false ) return 'please enter valid email address';
        else if( password.length === 0 ) return 'Enter your password';
        else if( password.length <6 ) return 'password length must be greate than 5';
        else
           return '';

    }

    const HandleSignin=async ()=>{
             
        try {
            
            const error = chackParameter();

            if( error ){
                toast.error(error);
                return;
            }
            
            /*
                
                1. Trying to call the api
                2. status 200 then there is an error
                3. status 202 means there is no error 
              
            */
            const response=await axios({
                method:'POST',
                url:localLoginURl,
                data:{
                    email,
                    password
                },
                withCredentials:true
            });

            console.log(response);
            // if there is an error 
            if( response.status===200 ){
                toast.error(response.data.msg);
                return;
            }
            
            // showing the successfully message
            toast.success(response.data.msg);
            
            // after 3000 we will navigate to='/'
            setTimeout(()=>{
                navigate('/');
            },3000);

        } catch (error) {
            
            console.log(error);
            toast.error('Something went wrong. Please try again later');
        }
    }

    return(
        <div>
            <ToastContainer/>
            <div className='signin-container'>

                <div className='signin'>
                    <h2>Already Have an Account</h2>
                    <p>Sign in with your social media account or email address</p>
                    <div className='social-btn'>
                        
                        <div onClick={()=>redirectToServiceSSO(googleLoginURL)} className='social-link'>
                          <img className='social-img' src={googleicon} />
                          <div className='social-title'  > Google </div>
                        </div>

                    </div>
                    <div className='or-seperator'>
                        <b>or</b>
                    </div>
 
                    <div className='signin-group'>
                        <input 
                           className='signin-input'
                           placeholder='Enter your Email Address'
                           type='email'
                           value={email}
                           onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className='signin-group'>
                        <input 
                           className='signin-input'
                           placeholder='Enter your Password'
                           type='password'
                           value={password}
                           onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <Typography align='center'>
                        <Button 
                           className='signin-button'
                           variant="contained" 
                           color="primary"
                           onClick={HandleSignin}
                        >Sign In
                        </Button>
                    </Typography>
                    <div className='footer-signin-link'> 
                        <div className='forgot-password-link'> <Link to='/forgot-password'> Forgot Password?</Link> </div>
                        <div>
                            Have no account? <Link to='/signup'>Create one</Link>
                        </div>
                    </div>
                </div>

           </div>
        </div>
    )
}

export default Signin;