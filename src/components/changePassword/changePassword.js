import './changePassword.css';

import {Link,useParams,useNavigate } from 'react-router-dom';
import { Button,Typography } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';

import { useState } from 'react';
import axios from 'axios';

function ChangePassword(){

    const {tokenID}= useParams();
    const navigate = useNavigate();

    const change_Password_URl='http://localhost:3000/auth/change-password';
 
    const [password,setPassword]=useState('');
    const [confirm_password,setConfirm_password]=useState('');

    
    const chackParameter= ()=>{
        
        /*
            1. it is checking password should be greater than 5
            2. password and confirm password must be same
        */

        if( password==='' ) return 'please enter your password'
        else if( password.length <6 ) return 'password length must be greater than 5';
        else if( confirm_password != password ) return 'your password and confirm password is not same'; 
        return '';

    }

    const HandleChangePassword=async ()=>{
             
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
                method:'PUT',
                url:change_Password_URl,
                data:{
                    password,
                    confirm_password,
                    tokenID
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
            
            // after 4000ms it will go to url='/'
            setTimeout(()=>{
                navigate('/');
            },4000)

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

                    <h2>Change Password</h2>

                    <div className='or-seperator'>
                        <b>or</b>
                    </div>
 
                    <div className='input-group'>
                        <input 
                           className='forgot-password-input'
                           placeholder='Enter your Password'
                           type='password'
                           value={password}
                           onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>

                    <div className='input-group'>
                        <input 
                           className='forgot-password-input'
                           placeholder='Confirm Password'
                           type='password'
                           value={confirm_password}
                           onChange={(e)=>setConfirm_password(e.target.value)}
                        />
                    </div>

                    <Typography align='center'>
                        <Button 
                           className='forgot-password-button'
                           variant="contained" 
                           color="primary"
                           onClick={HandleChangePassword}
                        >Change Password
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

export default ChangePassword;