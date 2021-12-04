import './signin.css';
import {Link} from 'react-router-dom';
import { Button,Typography } from '@material-ui/core';
import googleicon from '../../images/google-icon.png';
import githubicon from '../../images/github-icon.png';

function Signin(){
    
    const googleLoginURL='http://localhost:3000/auth/google';
    const githubLoginURL='http://localhost:3000/auth/github';

    const redirectToServiceSSO= async (authURL)=>{
        const newWindow=window.open(authURL,'_self','width:100%;height:100%');
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
                        />
                    </div>
                    <div className='signin-group'>
                        <input 
                           className='signin-input'
                           placeholder='Enter your Password'
                           type='password'
                        />
                    </div>
                    <Typography align='center'>
                        <Button 
                           className='signin-button'
                           variant="contained" 
                           color="primary"
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