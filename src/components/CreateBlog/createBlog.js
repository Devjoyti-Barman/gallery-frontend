/*
   This is how we change the State in nested component
*/


import {useState} from 'react';
import copy from 'copy-to-clipboard';
import Editor from '../Editor/editor';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './createBlog.css';
import axios from 'axios';

const upload_preset='kisancareBlog';
const cloud_name='dtdjhqe3m';
const uploadImageURL='https://api.cloudinary.com/v1_1/dtdjhqe3m/image/upload';
const uploadBlogURL='http://localhost:3000/blog/create';

function CreateBlog(){
    const [selectImage,setSelectImage]=useState('');
    const [generateIMG_URL,setGenerateIMG_URL]=useState('');

    const [title,setTitle]=useState('');
    const [data,setData]=useState('');
    const [img,setImg]=useState('');
    const [imgURL,setImgURL]=useState('');
    const [isactive,setIsactive]=useState(false);
    

    function HandleCopyButton(){
        copy(generateIMG_URL);
        toast.success('image url copied successfully');
    }
  
    async function HandleGenerateButton(){

        if( selectImage===''  ){
            toast.error('Please select an Image');
            return;
        }


        try {
            
            const formData = new FormData();
        
            formData.append('file',selectImage);
            
            formData.append('upload_preset',upload_preset);
            formData.append('cloud_name',cloud_name);
            
            const response= await toast.promise(
                fetch(uploadImageURL,{method:"post",body:formData}),
                {
                    pending: 'wait generating image url',
                    success: 'successfully generating image url 👌',
                    error: 'something went wrong please try again later 🤯'
                }
            )

            const result =await response.json();

            setGenerateIMG_URL(result.url);


        } catch (error) {
            toast.error('something went wrong please try again later');
        }

    }

    function updateData(newData){

        setData(newData);
    }

    function updateTitle(newData){
        setTitle(newData);
    }

    function updateImg(newData){
        setImg(newData);
    }

    function updateImgURL(newData){
        setImgURL(newData);
    }
    
    function checkParameter(){
        
        // validating the title parameter
        
        if( title.trim().length===0 ){
            toast.error('Filled the Title')
            return false;
        }
        else if( title.trim().length <10 ){
            toast.error('Title should be greater than equal to 10');
            return false;
        }
        else if( title.trim().length >100 ){
            toast.error('Title should be less than equal to 100');
            return false;
        }
        
        // validating the blog front image

        if( imgURL.length === 0 ) {
            toast.error('Add the front image');
            return false;
        }

        // validating the blog body

        if(data.trim().length <100){
            toast.error('Add The more things to the blog');
            return false;
        }

        return true;
        

    }

    async function submitButton(){
        
        let isOK= checkParameter(title,data,img,isactive);
        
        if( isOK===false ) return;

        try {
            
            async function createBlogAPI(){

                const formData = new FormData();
                formData.append('file',img);
                formData.append('upload_preset',upload_preset);
                formData.append('cloud_name',cloud_name);
                
                const response=await fetch(uploadImageURL,{method:"post",body:formData});
                const result = await response.json();
                
                const responseBlog=await axios({
                    method:'POST',
                    url:uploadBlogURL,
                    withCredentials:true,
                    data:{
                        title,
                        frontImage:result.url,
                        body:data
                    }
                });
            } 

            toast.promise(
                createBlogAPI,
                {
                    pending:'saving the Blog',
                    success: 'saved Blog successfully👌',
                    error: 'something went wrong unable to save the blog🤯'
                }
            )
      
        } catch (error) {
            console.log(error);
            toast.error('something went wrong please try again later');
        }        
        
    }
    

    return(
        <div>
            <ToastContainer/>
            <div className="generate-image-container">

               <input 
                    className="img-input" 
                    type="file" 
                    accept="image/*"
                    onChange={(e)=>setSelectImage(e.target.files[0])}
                />
               <input 
                   className="generate-url" 
                   type="url" 
                   value={generateIMG_URL}
                   readOnly
                />
                <div className="generate-btn-container">
                   <button  onClick={HandleGenerateButton} className="btn-image generate-url-btn">Get image URL </button>
                   <button  onClick={HandleCopyButton} className="btn-image copy-url-btn">Copy URL </button>
                </div>
            </div>

            <Editor 
                updateData={updateData} 
                updateTitle={updateTitle}
                updateImg={updateImg}
                updateImgURL={updateImgURL}
                ImageURL={imgURL}
                isactive={isactive}
                setIsactive={setIsactive}    
            />

            <button  className="btn-submit" onClick={submitButton} > Submit </button>
        </div>
    )
}

export default CreateBlog;