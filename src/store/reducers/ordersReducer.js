import { COMPLETE_ORDER_FAILURE, COMPLETE_ORDER_REQUEST, COMPLETE_ORDER_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS } from "../actions/ordersAction";

const initialState = {
    loading:false,
    value:{},
    error:null
}

export const ordersReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS_REQUEST:
            return {...state, loading:true};
        case GET_ORDERS_SUCCESS:
            return {...state, value:action.value, loading:false};
        case GET_ORDERS_FAILURE:
            return {...state, error:action.error, loading:false};
        case COMPLETE_ORDER_REQUEST:
            return {...state, loading:true};
        case COMPLETE_ORDER_SUCCESS:
            return {...state, value:action.value, loading:false};
        case COMPLETE_ORDER_FAILURE:
            return {...state, error:action.error}
        default:
            return state;
    };
};