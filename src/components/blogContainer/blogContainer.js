
import './blogContainer.css';
import axios from "axios";
import { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import BlogCard from "../blogCard/blogCard";




function BlogContainer(){
    
    const [isLoading,setIsLoading]=useState(true);
    const [getCard,setGetCard]=useState([]);
    const {search}=useLocation();

    useEffect(async() => {
        
        try {
           // console.log(search);
            const API=`http://localhost:3000/blog/search${search}`;
            const response=await axios({
                method:'GET',
                url:API,
                withCredentials:true
            });
            
            const data=response.data.data;
    
            const temp=[];
    
            for(let i=0;i<data.length;i++){
                
                temp.push(
                    <BlogCard
                        frontImage={data[i].frontImage}
                        title={data[i].title}
                        id={data[i]._id}
                        key={i}
                    />
                )
            }
            
    
            setGetCard(temp);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            alert('error');
        }

        
    }, [search]);
    console.log('blog Container');
    return(
        <div>
            <div className='blog-container-holder'> 

               { isLoading===true? <>Loading...</>:[...getCard] }
            </div>
        </div>
    )
}

export default BlogContainer;