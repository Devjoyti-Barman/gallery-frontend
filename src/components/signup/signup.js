import './signup.css';

import googleicon from '../../images/google-icon.png';
import githubicon from '../../images/github-icon.png';

function Signup(){

    return(
        <div>
            <div className='signup-container'>
                <div className='signup-btn'>
                    <div className='signup'>
                        <img 
                            src={googleicon}
                            className='signup-icon' 
                        />
                        <div className='signup-text'> Sign in with google</div>
                    </div>
                </div>
                <div className='signup-btn'>
                    <div className='signup'>
                        <img 
                            src={githubicon}
                            className='signup-icon' 
                        />
                        <div className='signup-text'> Sign in with github</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;