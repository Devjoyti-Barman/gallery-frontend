import axios from "axios"
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS, LOGOUT } from "./userTypes"

const LoginSuccessful='http://localhost:3000/auth/success';

export const fetchUsersRequest=()=>{
    return {
        type:FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess=(users)=>{
    return {
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

export const fetchUsersFailure=(error)=>{
    return {
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

export const Logout=()=>{
    return{
        type:LOGOUT,
        payload:{}
    }
}

export const fetchUser=()=>{

    return (dispatch)=>{
        dispatch(fetchUsersRequest());
        axios({
            method:'GET',
            withCredentials:true,
            url:LoginSuccessful
      
        })
        .then(response=>{
         
            const users=response.data.user;
            dispatch(fetchUsersSuccess(users));
            
        })
        .catch(error=>{
            const errorMsg=error.message
            dispatch(fetchUsersFailure(errorMsg));
        })
    }
}

