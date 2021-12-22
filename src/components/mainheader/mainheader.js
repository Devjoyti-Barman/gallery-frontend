import './mainheader.css';
import headerIcon from '../../images/kisan-care.jpg'
import { NavLink } from "react-router-dom";


function MainHeader(){

    return(
        <div className='header-container'>
            <header className='header'>
                <div className='header-left'>
                    
                    <NavLink to='/' className='header-h1 header-navlink' >
                        <img className='header-icon' src={headerIcon} />
                        <h4> Kisan Care </h4>
                    </NavLink>
                    <NavLink to='search/blog' className='header-navlink'> blog </NavLink>
             
                </div>
                <div className='header-right'>
                    <NavLink to='signin' className='header-navlink'> Signin </NavLink>
                    <NavLink to='signup' className='header-navlink'> Signup </NavLink>
                </div>
            </header>
        </div>
    )
}

export default MainHeader;