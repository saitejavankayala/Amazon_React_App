/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./Home.css"
import Product from './Product';
function Home() {
    
    return (
        <div className="home">
            
         <img className="home__image"
             src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
             alt="banner_img"/>
  
    {
        /**
         *  product_id, title, price,rating,iamge
         */
    }
            <div className="home__row">

    <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="4554546"
            title="Dell G5 SE 5505 15.6 FHD IPS Gaming Laptop, AMD Ryzen 5 4600H 8GB RAM, 512GB SSD, AMD Radeon RX 5600M 6GB Graphics, Windows 10 Home, Silver"
            price={25555.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/71MnZe6FknL._AC_UY218_.jpg"
          />
    
          </div>
          <div className="home__row">

<Product
        id="38758599"
        title="Lenovo Ideapad S145 AMD RYZEN 3 3200U 15.6-inch (39.62 cms) FHD Laptop (4GB/1TB/Windows 10/Office 2019/Grey/1.85Kg),81UT001CIN"
        price={59999.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/811w2pSQcnL._AC_UY218_.jpg"
      />
      
<Product
        id="78903850"
        title="Lifelong LLPCM05 Cordless Beard Trimmer, 1 Year Warranty ; Runtime: 50 minutes and 20 Adjustable length settings (Black)"
        price={899.99}
        rating={2}
        image="https://m.media-amazon.com/images/I/51Hqjk9KZTL._AC_UL320_.jpg"
      />
      <Product
              id="99903850"
              title="Mask LC49RG90SSUXEN "
              price={199.99}
              rating={3}
              image="https://m.media-amazon.com/images/I/412z+4nnPdL._AC_SY200_.jpg"
            /></div>
             <div className="home__row">

<Product
        id="943898349"
        title="Amisha Gift Gallery Plastic Bullet Bike Toy Model for Kids, Black, 5 years and above"
        price={1999999.99}
        rating={5}
        image="https://m.media-amazon.com/images/I/7125MBsrLRL._AC_UL320_.jpg"
      /></div>
          {
        /**
         * product
         */
    }
        </div>
    )
}

export default Home
