import './footer.css';
import {NavLink} from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import InstragramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import SmartKisanIcon from '../../images/smart-kisan.jpg'
function Footer(){

    return (
        <footer className='footer'>
            <div className='footer-container'>
                
                <section className='footer-section'>
                    <img src={SmartKisanIcon} className='footer-s1-img'/>
                </section>

                <section className='footer-section website-info'>
                   <h2>About</h2>
                   <NavLink to='/' className='footer-about-link'>About Us</NavLink>
                   <NavLink to='/' className='footer-about-link'>Privacy Policy</NavLink>
                   <NavLink to='/' className='footer-about-link'>Cookie Declaration</NavLink>
                </section>

                <section className='footer-section follow-link-container'>
                   <h2>Follow us on</h2>
                   <FacebookIcon className='follow-social-link'/>
                   <LinkedinIcon className='follow-social-link'/>
                   <InstragramIcon className='follow-social-link'/>
                   <TwitterIcon className='follow-social-link'/>
                </section>


            </div>


        </footer>
    )
}

export default Footer;