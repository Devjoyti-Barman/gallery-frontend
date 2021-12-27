import './savedBlog.css';
import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from '../blogCard/blogCard';

function SavedBlog(){
    
    const [savedBlogs,setSavedBlogs]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        
        console.log('mounting....');
        const saveBlogURL='http://localhost:3000/blog/saved';
        let source=axios.CancelToken.source();

        const fetchSavedBlog=async()=>{

            try {
            
                const response=await axios({
                    method:'GET',
                    withCredentials:true,
                    url:saveBlogURL,
                    cancelToken:source.token
        
                });   
                
                const data=response.data.savedBlog;
    
                const Blogs=data.map((blog,idx)=>{
                    return(
                        <BlogCard 
                           frontImage={blog.frontImage}
                           title={blog.title}
                           id={blog._id}
                           key={blog._id}
                        />
                    )
                });
                
                setSavedBlogs(Blogs);
                setLoading(false);
                
    
            } catch (error) {
               
                // if the error is coming fro canceling the axios call
                if( axios.isCancel(error) ){
                          
                } else
                   alert('something went wrong...');
    
            }
        }
        
        fetchSavedBlog();
        


        return()=>{
            source.cancel();
        }
      
    },[])

    return (
        <div>

            <div className='saved-blog-container'>
            {   
                loading===true ? 
                   <>Loading...</>
                :
                [...savedBlogs]
            }
            </div>
            
        </div>
    )
}

export default SavedBlog;