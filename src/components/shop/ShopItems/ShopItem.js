import React from 'react';
import { Link } from 'react-router-dom';
import './shopitem.css';


const ShopItem = ({ items }) => {
  return (
    <div className="item-container">
          <div className="items">
    {items.map(item =>(
        <div className="item" key={item.id}>
        <Link className='link' to={`details/${item.id}`}>
          <div className="foto">
            <img src={item.first_image}
            alt='photoOnChange'
            onMouseOver={e => e.currentTarget.src = item.second_image}
            onMouseOut={e => e.currentTarget.src = item.first_image}
            ></img>
          </div>
          <div className="text-under">
            <div className="text-under-left">
              <h2>{item.title}</h2>
              <p>{item.short_description}</p>
            </div>
            <div className="text-under-right">
              <span className="price-text">{item.price} USD</span>
              <button>shop now</button>
            </div>
          </div>
        </Link>
        </div>

      )) 
      }
      </div>
    </div>
  );
};

export default ShopItem;
