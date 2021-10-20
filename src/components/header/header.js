import { Link } from "react-router-dom";
import './header.css';
import {useState} from 'react';


function Header(){
    
    const [search,setSearch]=useState('');

    function HandleSearch(){

        window.location.replace(`/search/${search}`);
    }
    

    return (
        <div className="header-container">
            <header className="header">
                <div> <Link className="Link" to="/">  Gallery </Link> </div>
                <div className="search-container"> 
                    <input className="search-bar" value={search} onChange={(e)=>{setSearch(e.target.value)}} type="search" placeholder="search by image Name"/>
                    <button className="search-btn" onClick={HandleSearch}> Search</button>
                </div>
                <div> <Link className="Link" to="/upload-image"> Upload Image </Link> </div>
            </header>
        </div>
    )
}

export default Header;