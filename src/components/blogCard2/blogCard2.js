import './blogCard2.css';
import { useNavigate } from "react-router-dom";

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Markup } from 'interweave';

function BlogCard2(props){
    
    const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December'];

    const navigate = useNavigate();
    const {frontImage,title,id,createdAt,body,author}=props;

    console.log(frontImage);
    console.log(title);
    console.log(createdAt);
    console.log(body);
    console.log(author);
    const [isSave,setIsSave]=useState(false);
    
    const HandleClick=()=>{
        const routePath=`/show/blog/${id}`;
        navigate(routePath);
    }
    const HandleSaveBlog=async()=>{
        setIsSave(true);
        const url='http://localhost:3000/blog/save';
        
        try {
            const {data}=await axios({
                method:'PUT',
                url:url,
                withCredentials:true,
                data:{
                    blogID:id
                }
            });

        } catch (error) {
            alert('something went wrong...');
            console.log(error);
        }
    }
    
    const HanldeUnsaveBlog=async()=>{
        
        setIsSave(false);
        const url='http://localhost:3000/blog/unSave';

        try {
            const {data}=await axios({
                method:'PUT',
                url:url,
                withCredentials:true,
                data:{
                    blogID:id
                }
            })
    
        } catch (error) {
            alert('something went wrong');
        }
    }

    const getDate=()=>{
        
        const date=createdAt.split('T')[0].split('-');                
        const time=date[2]+' '+months[ parseInt(date[1])-1 ]+', '+date[0];
        return time;

    }
    
    // it will run everytime to open this component
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
        <div className='blog-card2'>

            <div className='blog-card2-container'>
                
                <div className='blog-card2-section-1'>
    
                    <div className='blog-card2-section-1-part-1'>
    
                        <img className='blog-card2-author-img' src={frontImage} />
                        <div className='blog-card2-author-name'>{author}</div>
                        
                    </div>
        
                    <div className='blog-card2-section-1-part-2'>
                        
                        <div className='blog-card2-title' onClick={HandleClick}> {title} </div>
                        <div className='blog-card2-body'>
                            <Markup content={body} />
                        </div>
             
                    </div>

                    <div className='blog-card2-section-1-part-3'>
                        <div className='blog-card2-section-1-part-3-date'>{getDate()}</div>
                        <div className='save-blog-container'>
                            {isSave===true ? <BookmarkIcon className='blog-card2-save-blog-icon' onClick={HanldeUnsaveBlog}/> :<BookmarkBorderIcon  className='blog-card2-save-blog-icon' onClick={HandleSaveBlog}/>}
                        </div>
                    </div>
                   
                </div>
    
                <div className='blog-card2-section-2'>
                    
                    <img className='blog-card2-front-img' src={frontImage}/>
                   
                </div> 

            </div>

        </div>
    )
}


export default BlogCard2;