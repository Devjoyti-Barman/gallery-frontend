
import { CKEditor } from 'ckeditor4-react';
import './editor.css';

function Editor(props){
    
    const {updateData,updateTitle,updateImg,updateImgURL,ImageURL,isactive,setIsactive}=props;

    return(
        <div className="editor">
            <div className="title-container">

                <div className="label">Add Title</div>
                <textarea className="input-title" onChange={(e)=>updateTitle(e.target.value)}></textarea>
                <div className="label">Front Image</div>
                
                <input
                   className="img-input" 
                   type="file" 
                   id="img" 
                   name="img" 
                   accept="image/*" 
                   onChange={
                        (e)=> {
                           const imgURL=URL.createObjectURL(e.target.files[0]);
                           updateImg(e.target.files[0]); 
                           updateImgURL(imgURL);
                           setIsactive(true);
                        }
                    }
                />

                <img className={ isactive===true ? "blog-image": ""} src={ImageURL}/>
            </div>
            <CKEditor
	           data="<p>Editor's content</p>"
	           onChange={ (evt) => updateData(evt.editor.getData())  }
	        />

        </div>
    )
}

export default Editor;