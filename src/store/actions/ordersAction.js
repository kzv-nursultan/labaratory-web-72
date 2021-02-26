import axios from '../../axiosData';

export const GET_ORDERS_REQUEST = 'GET_ORDERS_REQUEST';
export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
export const GET_ORDERS_FAILURE = 'GET_ORDERS_FAILURE';

export const COMPLETE_ORDER_REQUEST = 'COMPLETE_ORDER_REQUEST';
export const COMPLETE_ORDER_SUCCESS = 'COMPLETE_ORDER_SUCCESS';
export const COMPLETE_ORDER_FAILURE = 'COMPLETE_ORDER_FAILURE';

export const getOrdersRequest = () => (
    {type:GET_ORDERS_REQUEST}
);
export const getOrdersSuccess = value => (
    {type:GET_ORDERS_SUCCESS, value}
);
export const getOrdersFailure = error => (
    {type:GET_ORDERS_FAILURE, error}
);

export const completeOrderRequest = () => (
    {type:COMPLETE_ORDER_REQUEST}
);
export const completeOrderSuccess = value => (
    {type: COMPLETE_ORDER_SUCCESS, value}
);
export const completeOrderFailure = error => (
    {type: COMPLETE_ORDER_FAILURE, error}
);

export const getOrders = () => {
    return async (dispatch) => {
        dispatch(getOrdersRequest());

        try{
            const response = await axios.get('requests/.json');
            dispatch(getOrdersSuccess(response['data']));
        } catch (e) {
            dispatch(getOrdersFailure(e));
        };
    };
};

export const completeOrder = id => {
    return async (dispatch) => {
        dispatch(completeOrderRequest());

        try {
            await axios.delete('requests/'+id+'/.json');
            const response = await axios.get('requests/.json');
            dispatch(completeOrderSuccess(response.data));
        } catch (e) {
            dispatch(completeOrderFailure(e))
        };
    };
};