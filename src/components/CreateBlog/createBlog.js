/*
   This is how we change the State in nested component
*/

import {useState} from 'react';
import Editor from '../Editor/editor';
import PreviewEditor from '../previewEditor/previewEditor';

function CreateBlog(){

    const [title,setTitle]=useState('');
    const [data,setData]=useState('');
    const [img,setImg]=useState('');
    const [imgURL,setImgURL]=useState('');
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
    

    return(
        <div>
            <Editor 
                updateData={updateData} 
                updateTitle={updateTitle}
                updateImg={updateImg}
                updateImgURL={updateImgURL}
                ImageURL={imgURL}
                isactive={isactive}
                setIsactive={setIsactive}
                
            />
            <PreviewEditor data={data}/>
            <button onClick={()=>console.log(data)} >Click Me</button>
        </div>
    )
}

export default CreateBlog;