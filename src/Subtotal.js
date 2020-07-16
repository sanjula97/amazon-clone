import React from 'react'
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {

    const [{basket}] = useStateValue();

    return (
        <div className="subtotal">
            {/* price */}
            <CurrencyFormat 
            value={2456981} 
            displayType={'text'} 
            thousandSeparator={true} 
            prefix={'$'} 
            renderText={(value) => (
                <>
                    <p>
                    Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                       <input type="checkbox"/> This order contains a gift
                    </small>
                </>
            )} />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
