import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {

    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <img className="checkout__add" src="https://images.moneycontrol.com/static-mcnews/2017/10/Amazon-diwali-offer-banner.jpg" alt="Add"/>
            
            {basket?.length === 0 ? (
                <div>
                    <h2>Your basket is empty</h2>
                    <p>You have no items in the basket.To buy click on "Add to basket button" on a product that you like.</p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    {/* list all of the checkout products */}
                    {basket.map(item => (
                        <CheckoutProduct 
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}/>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Checkout
