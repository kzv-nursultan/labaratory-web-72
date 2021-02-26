import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import {useDispatch, useSelector} from 'react-redux';
import { getDish } from '../../store/actions/dishAction';
import DishCard from '../../components/DishCard/DishCard';
import Modal from '../../components/UI/Modal/Modal'
import DishInputs from '../DishInputs/DishInputs';
import {deleteDish} from '../../store/actions/dishAction';

const MainPage = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const dishes = useSelector(state=>state.dish.dishes);
    const deleteHandler = (id) => dispatch(deleteDish(id))

    useEffect(()=>{
        dispatch(getDish());
    },[dispatch]);

    const addClickHandler = () => {
        setShow(true);
    };

    const closeModal = () => {
        setShow(false);
    };

    const dishList = (
       Object.keys(dishes).map(key=>(
           <DishCard
           key={key}
           src={dishes[key]['image']}
           name={dishes[key]['name']}
           price={dishes[key]['price']}
           id={key}
           deleteHandler={deleteHandler}
           />
       ))
    );
    
    return (
        <div className='d-block bg-success text-white pt-1'>
            <div style={{width:'100px',margin:'0px 5px 5px auto'}}>
                <button onClick={()=>addClickHandler()}>
                    Add New
                </button>
            </div>
            {dishList}
            <Modal show={show} onClick={()=>closeModal()}>
                <DishInputs/>
            </Modal>
        </div>
    );
};

export default MainPage;