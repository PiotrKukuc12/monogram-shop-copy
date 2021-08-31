import React from 'react';
import useFetch from '../useFetch';
import './shop.css';
import ShopItem from './ShopItems/ShopItem';
import CircularProgress from '@material-ui/core/CircularProgress';

import ShopPageMiddle from './ShopPageMiddle';



const ShopPage = () => {
  // Get first 3 items from api
  const { error, isPending, data: items } = useFetch('http://localhost:8001/products?_start=0&_limit=3')

  return (
    <div className="main-container">
      <div className="hero-container">
        <div className="hero-image">
          <div className="hero-text">
            <h1>A console for every workflow</h1>
            <p>Discover the perfect console for yours</p>
          </div>
        </div>
      </div>
      { error && <div>{error}</div> }
      { isPending && <div className='loading'> <CircularProgress /> </div> }
      { items && <ShopItem items={items} /> }

    
      <ShopPageMiddle />
    </div>
  );
};

export default ShopPage;
