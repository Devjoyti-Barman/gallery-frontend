
import { CKEditor } from 'ckeditor4-react';

function Editor(props){
    
    const {updateData}=props;

    return(
        <div>
            <CKEditor
	           data="<p>Editor's content</p>"
	           onChange={ (evt) => updateData(evt.editor.getData())  }
	        />

        </div>
    )
}

export default Editor;