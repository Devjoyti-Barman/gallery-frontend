import './editImage.css';

import axios from "axios";
import {useState,useEffect} from 'react';
import {useParams,useHistory,useRouteMatch } from 'react-router-dom';


function EditImage(){
    
    const [ImgName,setImgName]=useState(null);

    const [ImgDetails,setImgDetails]=useState(null);
    
    const [img,setImage]=useState(null);

    const [id,setId]=useState(null);

    let history=useHistory();

    let match=useRouteMatch('/edit/:id');
    
   // console.log(match);
    

    async function HandleClick(){
        const API="http://localhost:5000/api/edit-image";
        
        try {
            const {data}=await axios.put(API,{id,ImgName,ImgDetails});
            alert(data);
        } catch (error) {
            alert({error}.error.response.data.error);
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
                console.log(error);
            }

        }

        getImage();
          
    }, [id])
    return(
        <div>
            
            { img ? 
                <div className="image-container">
                    <div>  <img className="edit-image" src={img}/>  </div>
                    <div> 
                        <b> Image Name </b> 
                        <div> 
                           <input className="input" type="text" value={ImgName} onChange={(e)=>{setImgName(e.target.value)}}/>
                        </div>
                    </div>
                    <div> 
                        <b>Image Details</b> 
                        <div> 
                            <input className="input" type="text" value={ImgDetails} onChange={(e)=>{setImgDetails(e.target.value)}} />
                        </div>  
                    </div>
                    <button className="edit-btn" onClick={HandleClick}>Submit</button>
                </div> 
            : <div></div>}

            
        </div>
    )
}

export default EditImage;