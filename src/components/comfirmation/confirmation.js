import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Confirmation(){
    
    
    const {tokenID}=useParams();
    console.log(tokenID);
    const validate_email_url=`http://localhost:3000/auth/validate/email/${tokenID}`;

    useEffect(async ()=>{
        
        const response= await axios({
            method:'GET',
            url:validate_email_url,
        });

        console.log(response);

    },[tokenID]);

    return(
        <div>
              hello everyone wait pokemopmmklasndjand
        </div>
    )
}

export default Confirmation;