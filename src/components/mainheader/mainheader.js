import './mainheader.css';
import headerIcon from '../../images/kisan-care.jpg'
import bookmarkIcon from '../../images/bookmark.png';

import { NavLink,useNavigate } from "react-router-dom";

import { useDispatch,useSelector } from 'react-redux';

function MainHeader(){
    const navigate=useNavigate();
    const user=useSelector(state=>state.user.users);
    return(
        <div className='header-container'>
            <header className='header'>
                <div className='header-left'>
                    
                    <NavLink to='/' className='header-h1 header-navlink' >
                        <img className='header-icon' src={headerIcon} />
                        <h4> Kisan Care </h4>
                    </NavLink>
                    <NavLink to='search/blog' className='header-navlink'> Blog </NavLink>
             
                </div>
                <div className='header-right'>
                    {
                        user===undefined ? ( 
                            <>     
                              <NavLink to='signin' className='header-navlink'> Sign in </NavLink>
                              <NavLink to='signup' className='header-navlink'> Sign up </NavLink>
                            </>
                        ) : (
                            
                            <>
                                <img  
                                   className='mainheader-img' 
                                   src={bookmarkIcon}
                                   onClick={()=>navigate('/saved/blog')} 
                                />
                                <img className='mainheader-img' src={user.photo} />

                            </>
                        )
                    }
              
                </div>
            </header>
        </div>
    )
}

export default MainHeader;