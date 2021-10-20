import './showImage.css';

import axios from "axios";
import {useState,useEffect} from 'react';
import {useParams,useHistory,useRouteMatch } from 'react-router-dom';


function ShowImage(){
    
    const [ImgName,setImgName]=useState(null);

    const [ImgDetails,setImgDetails]=useState(null);
    
    const [img,setImage]=useState(null);

    const [id,setId]=useState(null);

    let history=useHistory();

    let match=useRouteMatch('/show/:id');
       
    useEffect(() => {
        const API=`http://localhost:5000/api/get-image/${match.params.id}`;
        async function getImage(){

            if( match.isExact===false ) history.push('/error');
            try {
                const {data}= await axios.get(API);
                setId(data.Image._id);
                setImgName(data.Image.ImgName);
                setImgDetails(data.Image.ImgDetails);
                setImage(data.data);

            } catch (error) {
                alert('The image is not found');
                console.log({error});
            }

        }

        getImage();
          
    }, [])
    return(
        <div>
            
            { img ? 
                <div className="image-container">
                    <div>  <img className="edit-image" src={img}/>  </div>
                    <div> 
                        <b> Image Name </b> 
                        <div className="text-place">  
                           {ImgName}
                        </div>
                    </div>
                    <div> 
                        <b>Image Details</b> 
                        <div className="text-place"> 
                            {ImgDetails}
                        </div>  
                    </div>
                </div> 
            : <div></div>}

            
        </div>
    )
}

export default ShowImage;