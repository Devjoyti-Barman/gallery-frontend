/*
   This is how we change the State in nested component
*/

import {useState} from 'react';
import Editor from '../Editor/editor';

function CreateBlog(){
    
    const [data,setData]=useState('');
    function updateData(newData){

        setData(newData);
    }
    return(
        <div>
            <Editor updateData={updateData}/>
            <button onClick={()=>console.log(data)} >Click Me</button>
        </div>
    )
}

export default CreateBlog;