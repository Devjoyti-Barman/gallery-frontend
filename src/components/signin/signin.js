import './signin.css';
import {Link} from 'react-router-dom';
import { Button,Typography } from '@material-ui/core';
import googleicon from '../../images/google-icon.png';
import githubicon from '../../images/github-icon.png';
import { useState } from 'react';
import axios from 'axios';

function Signin(){
    
    const localLoginURl='http://localhost:3000/auth/local';
    const googleLoginURL='http://localhost:3000/auth/google';
    const githubLoginURL='http://localhost:3000/auth/github';

    const redirectToServiceSSO= async (authURL)=>{
        const newWindow=window.open(authURL,'_self','width:100%;height:100%');
    }

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const HandleSignin=async ()=>{
             
        try {
            
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

        } catch (error) {
            console.log('The Error');
            console.log(error);

        }
    }

    return(
        <div>
            <div className='signin-container'>
                <div className='signin'>
                    <h2>Already Have an Account</h2>
                    <p>Sign in with your social media account or email address</p>
                    <div className='social-btn'>
                        
                        <div onClick={()=>redirectToServiceSSO(googleLoginURL)} className='social-link'>
                          <img className='social-img' src={googleicon} />
                          <div className='social-title'  > Google </div>
                        </div>

                        <div onClick={()=>redirectToServiceSSO(githubLoginURL)} className='social-link'>
                          <img className='social-img' src={githubicon} />
                          <div  className='social-title' > Github </div>
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
                        Have no account? <Link to='/signup'>Create one</Link>
                    </div>
                </div>

           </div>
        </div>
    )
}

export default Signin;