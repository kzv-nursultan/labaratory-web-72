import React from 'react';

const OrdersInfo = props => {
    return (
        <div className='m-2'>
            {props.name} x {props.counter}
        </div>
    );
};

export default OrdersInfo;