import Image from './logo192.png'
import './card.css';

function Card(props){
    
    const {ImgName,ImgDetails,imageSrc}=props;
    
    return(
        
        <div className="card">

            <img 
              src={imageSrc} className="image"/>
            <div className="container">
                <p>Image Name: <b>{ImgName}</b></p> 
            </div>
        

        </div>
    )
}


export default Card;