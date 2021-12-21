/*
    ID,
    title,
    image
*/

import './blogCard.css';

function BlogCard(props){
    
    const {frontImage,title,id}=props;

    return(
        <div className='blog-card'>
            <img 
                src={frontImage}
                className='blog-card-frontImage'
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