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
            <div className="home__row">
                <Product 
                id="123456"
                title="Apple macBook 16"
                price={1000.6}
                rating={5}
                image={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6I_G3YXNBOW9FiawehW6A84WVVp6Vrjnoqg&usqp=CAU'}/>


                <Product 
                id="123456"
                title="Iphone 11"
                price={1001.6}
                rating={4}
                image={'https://lifemobile.lk/wp-content/uploads/2019/04/iphone20x.jpg'}/>
            </div>


            <div className="home__row">
                <Product 
                id="123456"
                title="Sanmsumng S20"
                price={1200}
                rating={5}
                image={'https://images.samsung.com/mk/smartphones/galaxy-s20/buy/carousel/mobile/1-2-hubble-x1-y2-pink-blue-family-img.jpg'}/>


                <Product 
                id="123456"
                title="Thinkpad 20"
                price={964}
                rating={5}
                image={'https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg'}/>

                <Product 
                id="123456"
                title="Cricket bat"
                price={704}
                rating={5}
                image={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2mdGWmy2YK2VAr1W8-pr3Vu7LPrktn5_TFQ&usqp=CAU'}/>
            </div>

            <div className="home__row">
                <Product 
                id="123456"
                title="Yamaha guitar"
                price={450}
                rating={5}
                image={'https://www.guitars4u.com.au/wp-content/uploads/2019/08/GUITAR-D-41-EQ-00_1.jpg'}/>


            </div>
            
            {/* product */}
        </div>
    )
}

export default Home;
