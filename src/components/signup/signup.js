import './signup.css';
import {Link} from 'react-router-dom';
import { Button,Typography } from '@material-ui/core';
import googleicon from '../../images/google-icon.png';
import githubicon from '../../images/github-icon.png';

function Signup(){

    return(
        <div>
            <div className='signup-container'>
                <div className='signup'>
                    <h2>Create an Account</h2>
                    <p>Sign up with your social media account or email address</p>
                    <div className='social-btn'>
                        
                        <Link to='/' className='social-link'>
                          <img className='social-img' src={googleicon} />
                          <div className='social-title'  > Google </div>
                        </Link>

                        <Link to='/' className='social-link'>
                          <img className='social-img' src={githubicon} />
                          <div  className='social-title' > Github </div>
                        </Link>

                    </div>
                    {/* google sign up Container */}
                    <div className='or-seperator'>
                        <b>or</b>
                    </div>
                    <div className='signup-group'>
                        <input 
                           className='signup-input'
                           placeholder='Enter your Fullname'
                           type='text'
                        />
                    </div>
                    <div className='signup-group'>
                        <input 
                           className='signup-input'
                           placeholder='Enter your Email Address'
                           type='email'
                        />
                    </div>
                    <div className='signup-group'>
                        <input 
                           className='signup-input'
                           placeholder='Enter your Password'
                           type='password'
                        />
                    </div>
                    <div className='signup-group'>
                        <input 
                           className='signup-input'
                           placeholder='Confirm Password'
                           type='password'
                        />
                    </div>
                    <Typography align='center'>
                        <Button 
                           className='signup-button'
                           variant="contained" 
                           color="primary"
                        >Sign Up
                        </Button>
                    </Typography>
                </div>
           </div>
        </div>
    )
}

export default Signup;