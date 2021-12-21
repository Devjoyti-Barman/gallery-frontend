import './blogCard.css';
import { useNavigate } from "react-router-dom";

function BlogCard(props){
    
    const navigate = useNavigate();
    const {frontImage,title,id}=props;
    
    const HandleClick=()=>{
        const routePath=`/show/blog/${id}`;
        navigate(routePath);
    }

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
        </div>
    )
}


export default BlogCard;