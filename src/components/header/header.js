import { Link } from "react-router-dom";
import './header.css';


function Header(){

    return (
        <div className="header-container">
            <header className="header">
                <div> <Link className="Link" to="/">  Gallery </Link> </div>
                <div className="search-container"> 
                    <input className="search-bar" type="search" placeholder="search by image Name"/>
                    <button className="search-btn"> Search</button>
                </div>
                <div> <Link className="Link" to="/upload-image"> Upload Image </Link> </div>
            </header>
        </div>
    )
}

export default Header;