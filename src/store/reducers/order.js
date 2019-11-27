import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    orders: [],
    // 表示我们是否处于processing的状态
    loading: false,
    purchased: false
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.PURCHASE_INIT:
            return updateObject(state, { purchased: false });
            // return {
            //     ...state,
            //     purchased: false
            // }
        case actionTypes.PURCHASE_BURGER_START:
            return updateObject(state, { loading: true });
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = updateObject(action.orderData, {id: action.orderId});
            return (state, {
                ...state,
                loading: false,
                purchased: true,
                orders: state.orders.concat(newOrder)
            });

            // const newOrder = {
            //     ...action.orderData,
            //     id: action.orderId
            // }
            // return {
            //     // 把上传上去的order存在order array，就是最后一个page显示的内容
            //     ...state,
            //     loading: false,
            //     purchased: true,
            //     orders: state.orders.concat(newOrder)
            // };
        case actionTypes.PURCHASE_BURGER_FAIL:
            return updateObject(state, { loading: false });
        case actionTypes.FETCH_ORDERS_START:
            return updateObject(state, { loading: true });
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return updateObject(state, { loading: false, orders: action.orders });
            // return {
            //     ...state,
            //     loading: false,
            //     orders: action.orders
            // };
        case actionTypes.FETCH_ORDERS_FAIL:
            return updateObject(state, { loading: false });
        default:
            return state; 
    }
};

export default reducer;