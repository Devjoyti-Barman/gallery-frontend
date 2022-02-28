import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, LOGOUT } from "./userTypes"

const initialState={
    loading:false,
    users:{},
    error:''
}

const userReducer=(state=initialState,action)=>{

    switch(action.type){

        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true,
            }
        
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                loading:false,
                users:action.payload,
                error:''
            }
        
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                loading:false,
                users:{},
                error:action.payload
            }
        
        case LOGOUT:
            return{
                ...state,
                loading:false,
                users:{},
            }

        default: return state
    }
}

export default userReducer;