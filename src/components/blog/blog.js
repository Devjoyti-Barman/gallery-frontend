import './blog.css';
import { useEffect, useState } from 'react';
import {useLocation,useNavigate} from 'react-router-dom';
import SearchBar from '../searchBar/searchBar';
import BlogContainer from '../blogContainer/blogContainer';
import Pagination from '../pagination/pagination';

function Blog(){
    
    
    const {search}=useLocation();
    const query= new URLSearchParams(search);
    const navigate=useNavigate();
    
    const [page,setPage]=useState(1);

    const [searchParams,setSearchParams] =useState('');

    useEffect(()=>{
        
        setPage(query.get('pageNO')===null ? 1 : query.get('pageNO'));
    },[search]);
    
    const HandleSearchInput= (event)=>{          
        setSearchParams(event.target.value);
    } 
    const updatePage=(event)=>{
        setPage(event.target.value);
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
            
            <Pagination 
                page={page}
                updatePage={updatePage}
            />
        </div>
    )
}

export default Blog;