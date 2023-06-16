import React,{useEffect, useState} from 'react';
import Banner from '../components/banner';
import MiddleBanner from '../components/middle-banner';
import ProductsList from '../components/products-list';
import TransportList from '../components/transport-list';
import CommList from '../components/comm-list';
import '../styles/home.scss';

function Home() {

  useState();
  useEffect(()=>{})

  return (
    <>
      <Banner />
      <div className='part-one'>
        <div className='title'>
          <h1>Production</h1>
          <span>Nous produisons l'energie electrique & renouvelable</span>
        </div>
        <ProductsList />
        <div className='title'>
          <h1>Transport</h1>
          <span>Nous assumons le transport de l'energie electrique & renouvelable</span>
        </div>
        <TransportList />
        <MiddleBanner />
        <div className='title'>
          <h1>Commercialisation</h1>
          <span>Nous faisons le commerce de l'energie electrique & renouvelable</span>
        </div>
        <CommList />
      </div>
    </>
  );
}

export default Home;
