import './forgotPassword.css';
import {Link } from 'react-router-dom';
import { Button,Typography } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import EmailValidator  from 'email-validator';

import { useState } from 'react';
import axios from 'axios';

function ForgotPassword(){
    
    const forgot_Password_URl='http://localhost:3000/auth/generate-forgot-password-token';
 

    const [email,setEmail]=useState('');

    
    const chackParameter= ()=>{

        if( email.length === 0 ) return 'Enter your email';
        else if( EmailValidator.validate(email) ===false ) return 'please enter valid email address';
        else
           return '';

    }

    const HandleForgotPassword=async ()=>{
             
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
                url:forgot_Password_URl,
                data:{
                    email,
                },
                withCredentials:true
            });

            // if there is an error 
            if( response.status===200 ){
                toast.error(response.data.msg);
                return;
            }
            
            // showing the successfully message
            toast.success(response.data.msg);
            

        } catch (error) {
            
            console.log(error);
            toast.error('Something went wrong. Please try again later');
        }
    }

    return(
        <div>

            <ToastContainer/>

            <div className='forgot-container'>

                <div className='forgot'>

                    <h2>Forgot Password</h2>

                    <div className='or-seperator'>
                        <b>or</b>
                    </div>
 
                    <div className='input-group'>
                        <input 
                           className='forgot-password-input'
                           placeholder='Enter your Email Address'
                           type='email'
                           value={email}
                           onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>

                    <Typography align='center'>
                        <Button 
                           className='forgot-password-button'
                           variant="contained" 
                           color="primary"
                           onClick={HandleForgotPassword}
                        >Forgot Password
                        </Button>
                    </Typography>

                    <div className='footer-signin-link'> 
                        <div className='forgot-password-link'> <Link to='/signin'> Already Have an account </Link> </div>
                        <div>
                            Have no account? <Link to='/signup'>Create one</Link>
                        </div>
                    </div>

                </div>

           </div>

        </div>
    )
}

export default ForgotPassword;