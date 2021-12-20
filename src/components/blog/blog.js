import './blog.css';
import { useState } from 'react';
import {useLocation} from 'react-router-dom';
import SearchBar from '../searchBar/searchBar';

function Blog(){
    
    const {search}=useLocation();
    const query= new URLSearchParams(search);
    console.log(query.get('anime'));

    const [searchParams,setSearchParams] =useState('');

    return(

        <div className='main-screen'>
             <SearchBar/>
        </div>
    )
}

export default Blog;