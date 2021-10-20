import Image from './logo192.png'
import './card.css';
import { useHistory } from 'react-router';

function Card(props){
    
    const {ImgName,ImgDetails,imageSrc,imageID}=props;
    
    let history=useHistory();

    function HandleClick(){
        window.location.replace(`/show/${imageID}`);
    }

    return(
        
        <div className="card">

            <img 
              src={imageSrc} className="image"
              onClick={HandleClick}
            />
            <div className="container">
                <p>Image Name: <b>{ImgName}</b></p> 
            </div>
        

        </div>
    )
}


export default Card;