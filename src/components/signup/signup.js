import './signup.css';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';
import { Button,Typography } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import googleicon from '../../images/google-icon.png';
import axios from 'axios';
import { useState } from 'react';

function Signup(){
    

    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirm_password,setConfirm_password]=useState('');

    const googleLoginURL='http://localhost:3000/auth/google';
    const localLoginURL='http://localhost:3000/auth/create-user';
    

    const redirectToServiceSSO= async (authURL)=>{
        const newWindow=window.open(authURL,'_self','width:100%;height:100%');
    }

    const LocalSignUp=async ()=>{
        
        async function SignupMethod(){

            try {
                const response= await axios({
                    method:'POST',
                    url:localLoginURL,
                    data:{
                        username,
                        email,
                        password,
                        confirm_password,
                    }
                });
                console.log(response);
                
            } catch ({response}) {
                console.log(response);
            }
   
        }
        
        SignupMethod();
            
    }

    return(
        <div>
            <ToastContainer/>
            <div className='signup-container'>
                <div className='signup'>
                    <h2>Create an Account</h2>
                    <p>Sign up with your social media account or email address</p>
                    <div className='social-btn'>
                        
                        <div onClick={()=>redirectToServiceSSO(googleLoginURL)} className='social-link'>
                          <img className='social-img' src={googleicon} />
                          <div className='social-title'  > Google </div>
                        </div>

                    </div>
                    <div className='or-seperator'>
                        <b>or</b>
                    </div>
                    <div className='signup-group'>
                        <input 
                           className='signup-input'
                           placeholder='Enter your Fullname'
                           type='text'
                           value={username}
                           onChange={(e)=>setUsername(e.target.value)}
                        />
                    </div>
                    <div className='signup-group'>
                        <input 
                           className='signup-input'
                           placeholder='Enter your Email Address'
                           type='email'
                           value={email}
                           onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className='signup-group'>
                        <input 
                           className='signup-input'
                           placeholder='Enter your Password'
                           type='password'
                           value={password}
                           onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <div className='signup-group'>
                        <input 
                           className='signup-input'
                           placeholder='Confirm Password'
                           type='password'
                           value={confirm_password}
                           onChange={(e)=>setConfirm_password(e.target.value)}
                        />
                    </div>
                    <Typography align='center'>
                        <Button 
                           className='signup-button'
                           variant="contained" 
                           color="primary"
                           onClick={LocalSignUp}
                        >Sign Up
                        </Button>
                    </Typography>
                    <div className='footer-signin-link'> 
                        Already have an account? <Link to='/signin'>Login here</Link>
                    </div>
                </div>

           </div>
        </div>
    )
}

export default Signup;