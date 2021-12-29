import './showBlog.css';

import axios from "axios";
import { Markup } from "interweave";
import { useEffect,useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";

function ShowBlog(){
    
    const [data,setData]=useState({
       title:'',
       author:'',
       frontImage:'',
       body:''
    });


    const {blogID}=useParams();
    
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

    return(
        <div className='show-blog-container'>
            <div className='show-blog'>
                <div className='header-section'>
  
                    <div className='blog-title'> {data.title} </div>
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