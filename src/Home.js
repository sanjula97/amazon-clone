import React from 'react';
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img src="https://media.cdn.gradconnection.com/Amazon_Banner_01RjYgj.png" 
            alt="Banner image"
            className="home__image"/>

            {/* product id,title,price,rating,image */}
            <Product 
            id="123456"
            title="Sanjula title"
            price={11.6}
            rating={5}
            image={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6I_G3YXNBOW9FiawehW6A84WVVp6Vrjnoqg&usqp=CAU'}/>
            {/* product */}
        </div>
    )
}

export default Home;
