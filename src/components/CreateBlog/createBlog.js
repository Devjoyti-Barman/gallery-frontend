/*
   This is how we change the State in nested component
*/

import {useState} from 'react';
import Editor from '../Editor/editor';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './createBlog.css';

function CreateBlog(){

    const [title,setTitle]=useState('');
    const [data,setData]=useState('');
    const [img,setImg]=useState('');
    const [imgURL,setImgURL]=useState('');
    const [generateIMG,setGenerateIMG]=useState('');
    const [isactive,setIsactive]=useState(false);

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

    function submitButton(){
        
        let isOK= checkParameter(title,data,img,isactive);
        if( isOK===true ){
           toast.loading('waiting');
        }
    }
    

    return(
        <div>
            <ToastContainer/>
            <div className="generate-image-container">

               <input className="img-input" type="file" accept="image/*"/>
               <input className="generate-url" type="url" value={generateIMG}/>
               <button  className="btn-image-url">Get image URL </button>
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