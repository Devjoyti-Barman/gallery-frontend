import './upload.css';
import axios from "axios";
import { useState } from "react";

function Upload(){
    

    const [ImgName,setImgName]=useState('');

    const [ImgDetails,setImgDetails]=useState('');
    
    const [img,setImage]=useState('');
    

    async function HandleUpload(e){

        const API="http://localhost:5000/api/upload-image";
        try {
            const formData= new FormData();


            formData.append('productImage',img);
            formData.append('ImgName',ImgName);
            formData.append('ImgDetails',ImgDetails);
            
            if( img===''  || ImgName==='' || ImgName==='' ){
                alert("filed all the credentials");
                return;
            }


            const data=await fetch(
                API,
                {
                    method: 'POST',
                    body: formData,
                }
            )
            if( data.ok===false) {
                alert("unable to save the image");
            }else
              alert("successfully created the data");
        } catch (error) {
            alert("unable to save the image");
            console.log({error});
        }
    }

    return(
        <div className="box-container"> 
            <div className="box">
                <form encType="multipart/form-data" method="post" action="http://localhost:5000/api/upload-image">
                    <div>
                        <div>  
                            <div className="input-title"> <b>Select an Image</b> </div>
                            <input name="productImage" type="file" required onChange={(e)=>{console.log(e.target.files);setImage(e.target.files[0])}}/> 
                        </div>
                        <div>
                            <div className="input-title"> <b>Image Name</b> </div>  
                            <input className="input" placeholder="Enter image Name" name="ImgName" type="text" value={ImgName} onChange={(e)=>{setImgName(e.target.value)}}/> 
                        </div>
                        <div>  
                        <div className="input-title"> <b>Image Details</b> </div>  
                            <input className="input" placeholder="Enter image Details" name="ImgDetails" type="text" value={ImgDetails} onChange={(e)=>{setImgDetails(e.target.value)}}/> 
                        </div>
                    </div>
                    
                </form>
                <button  onClick={HandleUpload}>submit</button>
            </div>

           
            
        </div>
    )
}

export default Upload;