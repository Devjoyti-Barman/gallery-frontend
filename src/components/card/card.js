import Image from './logo192.png'
import './card.css';

function Card(){

    return(
        
        <div className="card">

            <img 
              src={Image} className="image"/>
            <div className="container">
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p> 
            </div>
        

        </div>
    )
}


export default Card;