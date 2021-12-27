import axios from "axios";
import { useEffect } from "react"

function TestComponent(){
  
    useEffect(()=>{
        const url='http://localhost:3000/blog/isSave';
        const saveBlog=async()=>{
            try {
                
                const {data}=await axios({
                    method:'POST',
                    url:url,
                    withCredentials:true,
                    data:{
                        blogID:'61bc62f56e4758e0cad98f65'
                    }
                });
                console.log(data);
            } catch (error) {
                console.log('error',error);
            }
        }

        saveBlog();
    },[]);
    return(
        <div>
             ...Testing
        </div>
    )
}

export default TestComponent;