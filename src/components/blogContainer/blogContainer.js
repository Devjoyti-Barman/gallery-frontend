
import './blogContainer.css';
import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "../blogCard/blogCard";




function BlogContainer(){
    
    const [isLoading,setIsLoading]=useState(true);
    const [getCard,setGetCard]=useState([]);


    useEffect(async() => {
        
        const pageNo=1;
        const API=`http://localhost:3000/blog/page/${pageNo}`;
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
        console.log(data);
        console.log(temp);

        setGetCard(temp);
        setIsLoading(false);
        
    }, [])

    return(
        <div>
            <div className='blog-container-holder'> 

               { isLoading===true? <>Loading...</>:[...getCard] }
            </div>
        </div>
    )
}

export default BlogContainer;