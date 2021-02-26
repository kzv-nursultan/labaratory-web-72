import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { postDish } from '../../store/actions/dishAction';

const DishInputs = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({});

    const onChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;

        setData(prevState=>({
            ...prevState,
            [name]:value
        }));
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        dispatch(postDish(data));
    };


    return (
        <div>
            <form className='d-flex flex-column'
                onSubmit={onSubmitHandler}>
                <input name='name' placeholder='name' onChange={onChangeHandler} required/>
                <input name='price' placeholder='price' onChange={onChangeHandler} required/>
                <input name='image' placeholder='image' onChange={onChangeHandler} required/> 
                <button type='submit'>
                    create    
                </button>               
            </form>
        </div>
    );
};

export default DishInputs;