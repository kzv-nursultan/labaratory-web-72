import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { completeOrder, getOrders } from '../../store/actions/ordersAction';
import OrdersCard from '../../components/OrdersCard/OrdersCard'

const OrdersPage = () => {
    const dispatch = useDispatch();
    const store = useSelector(state=>state.order);
    const completeHandler = (id) => dispatch(completeOrder(id));

    useEffect(()=> {
        dispatch(getOrders());
    },[dispatch]);

    let ordersCard = (
        Object.keys(store.value).map(key=>(
            <OrdersCard key={key}
            store={store}
            id={key}
            name={store['value'][key]['data']['name']}
            address={store['value'][key]['data']['address']}
            phone={store['value'][key]['data']['phone']}
            completeHandler={completeHandler}/>
        ))
    );
    

    return(
        <div>
            {ordersCard}
        </div>
    );
};

export default OrdersPage;