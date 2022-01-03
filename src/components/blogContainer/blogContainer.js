
import './blogContainer.css';
import axios from "axios";
import { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import BlogCard from "../blogCard/blogCard";
import BlogCard2 from '../blogCard2/blogCard2';



function BlogContainer(props){
    
    const [isLoading,setIsLoading]=useState(true);
    const [getCard,setGetCard]=useState([]);
    const {search}=useLocation();

    const {HandleSetTotalPages}=props

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
                    <BlogCard2
                        frontImage={data[i].frontImage}
                        title={data[i].title}
                        createdAt={data[i].createdAt}
                        body={data[i].body}
                        author={data[i].author}
                        id={data[i]._id}
                        key={i}
                    />
                )
            }
            
    
            setGetCard(temp);
            HandleSetTotalPages(response.data.totalPages);
            setIsLoading(false);
        } catch (error) {
            
            
        }

        
    }, [search]);
    return(
        <div>
            <div className='blog-container-holder'> 

               { isLoading===true? <>Loading...</>:[...getCard] }
            </div>
        </div>
    )
}

export default BlogContainer;