import React from 'react';
import useFetch from '../useFetch';
import ShopItem from './ShopItems/ShopItem';

const ShopPageMiddle = () => {
  const {
    error,
    isPending,
    data: items,
  } = useFetch('http://localhost:8001/products?_start=3&_limit=10');

  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <></>}
      {items &&
      <>
        <div className="middle-stopper">
            <div className="hero-middler-container">
            <div className="middle-image">
                <div className="middle-text">
                <h1>CREATE YOUR OWN CONSOLE</h1>
                <p>Add-on to make it perfect.</p>
                </div>
            </div>
            </div>
        </div>
        <ShopItem items={items} />
        </>
        }
    </>
  );
};

export default ShopPageMiddle;
