import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

const Checkout = props => {

    const checkoutCancelledHandler = () => {
        props.history.goBack();
    };

    const checkoutContinuedHandler = () => {
        props.history.replace('/checkout/contact-data');
    };

    let summary = <Redirect to='/'/>;
    if (props.ings) {
        const purchasedRedirect = props.purchased ? <Redirect to='/' /> : null;
        summary = (
            <div>
                {/* 神奇的写法？ */}
                {purchasedRedirect}
                {/* 这个CheckoutSummary会出现一些问题，它会提前load ings，而ings一开始是null */}
                <CheckoutSummary
                    ingredients={props.ings}
                    checkoutCancelled={checkoutCancelledHandler}
                    checkoutContinued={checkoutContinuedHandler} />
                <Route
                    path={props.match.path + '/contact-data'}
                    component={ContactData} />
            </div>
        );
    }

    return summary;
};

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    };
};

// 如果是第一个argument被忽略，我们要补null
export default connect(mapStateToProps)(Checkout);