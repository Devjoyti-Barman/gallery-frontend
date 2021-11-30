import { Markup } from "interweave";
function PreviewEditor(props){
    
    const {data}=props;
    console.log(typeof(data));
    return(
        <div>
            <div>
                <Markup content={data} />
            </div>
        </div>
    )
}

export default PreviewEditor;