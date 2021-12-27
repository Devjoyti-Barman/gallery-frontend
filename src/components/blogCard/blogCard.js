import './blogCard.css';
import { useNavigate } from "react-router-dom";

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { useEffect, useState } from 'react';
import axios from 'axios';

function BlogCard(props){
    
    const navigate = useNavigate();
    const {frontImage,title,id}=props;
    const [isSave,setIsSave]=useState(false);
    
    const HandleClick=()=>{
        const routePath=`/show/blog/${id}`;
        navigate(routePath);
    }
    
    useEffect(()=>{
        
        const url='http://localhost:3000/blog/isSave';
        let source=axios.CancelToken.source();

        const checkBlogSave=async()=>{
            try {
                const {data}=await axios({
                    method:'POST',
                    url:url,
                    withCredentials:true,
                    data:{
                        blogID:id
                    },
                    cancelToken:source.token
                });

                setIsSave(data.isSave);
            } catch (error) {
                
                if( axios.isCancel(error) ){

                }else
                   alert('something went wrong...');
            }
        }

        checkBlogSave()
     
        return()=>{
            source.cancel();
        }

    },[]);

    return(
        <div className='blog-card'>
            <img 
                src={frontImage}
                className='blog-card-frontImage'
                onClick={()=>HandleClick()}
            />
            <div className='blog-card-title'>
                <p className='blog-card-text'>
                    {title}
                </p>
            </div>
            <div className='save-blog-container'>
               {isSave===true ? <BookmarkIcon/> :<BookmarkBorderIcon/>}
            </div>
        </div>
    )
}


export default BlogCard;