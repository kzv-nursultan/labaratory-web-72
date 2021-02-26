import React from 'react';

const DishCard = props => { 

    return (
        <div className = 'd-flex border border-secondary m-2'>

            <img src={props.src} alt='dish' 
            style={{height:'70px', width:'100px'}}/>

            <div className='p-2 d-flex text-center'>
                <h3 className='m-1'>Name: {props.name} |</h3>
                <h3 className='m-1'>Price: {props.price}</h3>
            </div>

            <div style={{marginLeft:'auto'}}
            className='d-flex justify-content-end align-items-center'>
                <button style={{marginRight:'5px'}}
                onClick={()=>props.deleteHandler(props.id)}>
                    delete
                </button>

                <button style={{marginRight:'5px'}}>
                    edit
                </button>
            </div>            
        </div>
    );
};

export default DishCard;