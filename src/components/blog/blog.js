import './blog.css';
import { useState } from 'react';
import {useLocation,useNavigate} from 'react-router-dom';
import SearchBar from '../searchBar/searchBar';
import BlogContainer from '../blogContainer/blogContainer';

function Blog(){
    
    const {search}=useLocation();
    const query= new URLSearchParams(search);
    const navigate=useNavigate();

    //query.get('anime');

    const [searchParams,setSearchParams] =useState('');
    
    const HandleSearchInput= (event)=>{          
        setSearchParams(event.target.value);
    } 
    
    const getUpdateSearchParams=(eventKey,eventValue)=>{
          
        let searchQuery='?';
        let found=false;

        for( const [key,value] of query ){
            
            if( searchQuery==='?' ){

                if( key===eventKey ) {
                    searchQuery+=key+'='+eventValue;
                    found=true;
                }
                else
                   searchQuery+=key+'='+value;
            }else{

                if( key===eventKey ) {
                    searchQuery+='&'+key+'='+eventValue;
                    found=true;
                }
                else
                   searchQuery+='&'+key+'='+value;

            }
        }
        
        if( found===false && eventValue ){

            if( searchQuery==='?' )searchQuery+=eventKey+'='+eventValue;
            else
              searchQuery+='&'+eventKey+'='+eventValue;
        }

        return searchQuery;
    }

    const HandleSearchClick=(eventKey)=>{
       
        navigate(`/search/blog?pageNO=${1}&q=${searchParams}`);

        console.log(search);
    }

    return(

        <div className='main-screen'>
            
            <SearchBar
               value={searchParams}
               HandleSearchInput={HandleSearchInput}
               HandleSearchClick={HandleSearchClick}
            />
            
            <BlogContainer/>

        </div>
    )
}

export default Blog;