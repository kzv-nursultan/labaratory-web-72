import { DELETE_DISH_REQUEST, 
    DELETE_DISH_SUCCESS, 
    DELETE_DISH_FAILURE,
    GET_DISH_FAILURE, 
    GET_DISH_REQUEST, 
    GET_DISH_SUCCESS, 
    POST_DISH_FAILURE, 
    POST_DISH_REQUEST, 
    POST_DISH_SUCCESS, } from "../actions/dishAction";

const initialState = {
    loading:false,
    dishes:{},
    error:null
};

export const dishReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DISH_REQUEST:
            return {...state, loading:true};
        case GET_DISH_SUCCESS:
            return {...state, dishes:action.value, loading:false};
        case GET_DISH_FAILURE:
            return {...state, error:action.error, loading:false};
        case POST_DISH_REQUEST:
            return {...state, loading:true};
        case POST_DISH_SUCCESS:
            return {...state, loading:false, dishes:action.value};
        case POST_DISH_FAILURE:
            return {...state, error:action.error, loading:false};
        case DELETE_DISH_REQUEST:
            return {...state, loading:true};
        case DELETE_DISH_SUCCESS:
           return{...state, dishes:action.value, loading:false};
        case DELETE_DISH_FAILURE:
            return {...state, loading:false, error: action.error};
        default:
            return state;
    };
};
