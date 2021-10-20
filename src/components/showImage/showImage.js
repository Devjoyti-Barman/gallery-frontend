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
    
    async function HandleDelete(){
        const API="http://localhost:5000/api/detele-image";
        
        try {
            const data=await axios.delete(API,{data:{id:match.params.id}} );
            console.log(data);
            if(data.status===200){
                alert("successfully deleted the image");
                window.location.replace(`/`);
            }else 
               alert("Unable to deleted the image");
        } catch (error) {
            
            alert("something went wrong");
            console.log({error});
        }
    }

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
                    <button className="edit-btn" onClick={()=>window.location.replace(`/edit/${id}`)}>Edit</button>
                    <button className="delete-btn" onClick={HandleDelete}>Delete</button>
                </div> 
            : <div></div>}

            
        </div>
    )
}

export default ShowImage;