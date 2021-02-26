import React from 'react';
import OrdersInfo from '../OrdersInfo/OrdersInfo';


const OrdersCard = props => {
    let list = props.store.value;
    let id = props.id;

    let ordersList = (
      Object.keys(list[id]['orders']).map(key=>(
          <OrdersInfo 
          key={key}
          name={list[id]['orders'][key]['meals']['name']}
          counter = {list[id]['orders'][key]['counter']}/>
      ))
    );

    let totalPrice = (
        Object.keys(list[id]['orders']).reduce((acc, key)=>{

            return (list[id]['orders'][key]['meals']['price']) * 
            (list[id]['orders'][key]['counter']) + acc

        },0)
    );


    return (
        <div className='border border-primary'>
            <h3>
                Customer Info
            </h3>
            <p>Name: {props.name}</p>
            <p>Address: {props.address}</p>
            <p>Phone: {props.phone}</p>
            <h3>
                Orders
            </h3>
            {ordersList}
            <p>
                Total Price: {totalPrice}
            </p>
            <button onClick={()=>props.completeHandler(id)}
                    className='m-2 bg-secondary text-white'>
                Complete Order
            </button>
        </div>
    );
};

export default OrdersCard;