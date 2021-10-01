import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_img"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home-img"
        />
      </div>
      <div className="home_row">
        <Product
          id={1}
          title="Samsung Galaxy S21 5G | Factory Unlocked Android Cell Phone | US Version 5G Smartphone | Pro-Grade Camera"
          price={649.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/512Va+-kCJL._AC_SL1000_.jpg"
        />
        <Product
          title="Echo Dot (4th generation) | Smart speaker with Alexa | Home Assistant | Easy integration | Charcoal"
          id={2}
          price={20.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71Q9d6N7xkL._AC_SL1000_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          title="New Apple Watch SE (GPS, 40mm) - Space Grey Aluminium Case with Black Sport Band"
          id={3}
          price={150.0}
          rating={3}
          image="https://m.media-amazon.com/images/I/71bUKrOPzYL._SL1500_.jpg"
        />
        <Product
          title="Web Development Encyclopedia | The complete MERN Stack | Step By Step guide"
          id={4}
          price={19.99}
          rating={3}
          image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618144361i/57693957._UY2560_SS2560_.jpg"
        />
        <Product
          title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU "
          id={5}
          price={999.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          title="Woodland Shoes | Hard Sole | Breathable Material | Soft Material"
          id={6}
          price={24.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71xUvwXT4VL._UL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
