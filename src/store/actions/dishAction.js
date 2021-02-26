import axios from '../../axiosData';

export const GET_DISH_REQUEST = 'GET_DISH_REQUEST';
export const GET_DISH_SUCCESS = 'GET_DISH_SUCCESS';
export const GET_DISH_FAILURE = 'GET_DISH_FAILURE';

export const POST_DISH_REQUEST = 'POST_DISH_REQUEST';
export const POST_DISH_SUCCESS = 'POST_DISH_SUCCESS';
export const POST_DISH_FAILURE = 'POST_DISH_FAILURE';

export const DELETE_DISH_REQUEST = 'DELETE_DISH_REQUEST';
export const DELETE_DISH_SUCCESS = 'DELETE_DISH_SUCCESS';
export const DELETE_DISH_FAILURE = 'DELETE_DISH_FAILURE';

export const getDishRequest = () => (
    {type: GET_DISH_REQUEST}
);
export const getDishSuccess = value => (
    {type: GET_DISH_SUCCESS, value}
);
export const getDishFailuer = error => (
    {type:GET_DISH_FAILURE, error}
);

export const postDishRequest = () => (
    {type:POST_DISH_REQUEST}
);
export const postDishSuccess = value => (
    {type:POST_DISH_SUCCESS, value}
);
export const postDishFailure = error => (
    {type: POST_DISH_FAILURE, error}
);

export const deleteDishRequest = () => (
    {type: DELETE_DISH_REQUEST}
);
export const deleteDishSuccess = value => (
    {type: DELETE_DISH_SUCCESS, value}
);
export const deleteDishFailure = error => (
    {type: DELETE_DISH_FAILURE, error}
);
 
export const getDish = () => {
    return async (dispatch) => {
        dispatch(getDishRequest());

        try {
            const response = await axios.get('meals/.json');
            dispatch(getDishSuccess(response.data));
        } catch (e) {
            dispatch(getDishFailuer(e));
        };
    };
};

export const postDish = newData => {
    return async (dispatch) => {
        dispatch(postDishRequest());
        try {
            await axios.post('meals/.json', newData);
            const response = await axios.get('meals/.json');
            dispatch(postDishSuccess(response.data));
        } catch (e) {
            dispatch(postDishFailure(e));
        };
        getDish();
    };
};

export const deleteDish = (id) => {
    return async (dispatch) => {
        dispatch(deleteDishRequest());
        try {
            await axios.delete('meals/' + (id) + '/.json');
            const response = await axios.get('meals/.json');
            dispatch(deleteDishSuccess(response.data));
        } catch (e) {
            dispatch(deleteDishFailure(e));
        };
    };
};