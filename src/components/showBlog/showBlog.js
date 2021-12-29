import './showBlog.css';

import axios from "axios";
import { Markup } from "interweave";
import { useEffect,useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';

function ShowBlog(){
    
    const [data,setData]=useState({
       title:'',
       author:'',
       frontImage:'',
       body:''
    });
    
    const {blogID}=useParams();

    const [isSave,setIsSave]=useState(false);
    
    const HandleSaveBlog=async()=>{
        setIsSave(true);
        const url='http://localhost:3000/blog/save';
        
        try {
            const {data}=await axios({
                method:'PUT',
                url:url,
                withCredentials:true,
                data:{
                    blogID:blogID
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
                    blogID:blogID
                }
            })
    
        } catch (error) {
            alert('something went wrong');
        }
    }

    
    
    useEffect(()=>{
 
        const url=`http://localhost:3000/blog/show/${blogID}`;
      
        async function getAPI(){
            
            try {
                const response= await axios({
                    method:'get',
                    url:url,
                    withCredentials:true,
        
                });
                const {data}=response.data;

                setData({
                    title:data.title,
                    author:data.author,
                    frontImage:data.frontImage,
                    body:data.body
                })

            } catch ({response}) {
                console.log('error the hello');
                console.log(response)
            }
            
        }

        getAPI();


    },[blogID]);

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
                        blogID:blogID
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

    },[blogID]);

    return(
        <div className='show-blog-container'>
            <div className='show-blog'>
                <div className='header-section'>
  
                    <div className='blog-title-container'> 
                        <div className='blog-title'>{data.title}</div>
                        {isSave===true ? <BookmarkIcon className='bookmark-icon' onClick={HanldeUnsaveBlog}/> :<BookmarkBorderIcon className='bookmark-icon' onClick={HandleSaveBlog}/>}
                    
                    </div>
                    <div className='author-details'>
                        <img 
                           className='author-photo'
                           src='https://lh3.googleusercontent.com/a/AATXAJzB4qY9EQBxNy-Tl7988LYIpcPyE5CuKbJvBHf1=s96-c'
                        />
                        <div className='author-name'> 
                           <div> {data.author} </div>
                           <div> 20 March,2020 </div> 
                        </div>
                    </div>
                   
                </div>
                <div className='horizontal-line'></div>
                <div className='blog-body'>
                    <Markup content={data.body}/>
                </div>
            </div>
        </div>
    )
}

export default ShowBlog;