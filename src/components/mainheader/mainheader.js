import './mainheader.css';
import headerIcon from '../../images/kisan-care.jpg'
import { NavLink } from "react-router-dom";


function MainHeader(){

    return(
        <div className='header-container'>
            <header className='header'>
                <div className='header-left'>
                    
                    <NavLink to='/' className='header-h1'>
                        <img className='header-icon' src={headerIcon} />
                        <h4> Kisan Care </h4>
                    </NavLink>
                    <NavLink to='signup'> blog </NavLink>
             
                </div>
                <div>
                    <NavLink to='signin'> Signin </NavLink>
                    <NavLink to='signup'> Signup </NavLink>
                </div>
            </header>
        </div>
    )
}

export default MainHeader;