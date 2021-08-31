import { Button } from '@material-ui/core';
import React from 'react';
import './shoppingcard.css';
import CloseIcon from '@material-ui/icons/Close';

const ShoppingCard = () => {

const items = JSON.parse(localStorage.getItem('products'))
  return (
    <>
      <div className="shop-card">
        <div className="shop-header">
          <h2>Continue shopping</h2>
        </div>
        <div className="shop-content">
          {!items ? <div>  </div> : 
          items.map(item =>(

          <div className="shop-item" key={item.id}>
            <div className="shop-img">
              <img src={item.photo} alt='small'></img>
            </div>
            <div className="shop-info">
              <div className="title">
                <h3>{item.title}</h3>
                <Button className="but">
                  <CloseIcon />
                </Button>
              </div>
              <p className="item-price">{item.price} USD</p>
              <p className="item-amount">Amount: {item.amount}</p>
            </div>
          </div>
          ))
          }
        </div>
        <div className="shop-footer">
          <div className="total">
            <p className="total-p">Subtotal: 2item</p>
            <p>1300 USD</p>
          </div>
          <div className="checkout">
            <Button variant="contained">Checkout</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCard;
