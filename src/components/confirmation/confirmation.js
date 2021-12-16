import 'react-toastify/dist/ReactToastify.css';
import './confirmation.css';

import axios from "axios";
import { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


function Confirmation(){
    
    const navigate = useNavigate();

    const {tokenID}=useParams();
    const validate_email_url=`http://localhost:3000/auth/validate/email/${tokenID}`;

    useEffect(async ()=>{
        
        try {

            const response= await axios({
                method:'GET',
                url:validate_email_url,
            });
            
            // if there is an error
            if( response.status===200 ){
                toast.error(response.data.msg);
                console.log(response);
                return;
            }
            
            toast.success('successfully verified the user');

            setTimeout(()=>{
                navigate('/signin');
            },4000)

            
            
        } catch (error) {
            console.log(error);
            toast.error('the session is expired');
        }

    },[tokenID]);

    return(
        <div>
            <ToastContainer/>
            <div className="waiting">
                Loading...
            </div>
        </div>
    )
}

export default Confirmation;