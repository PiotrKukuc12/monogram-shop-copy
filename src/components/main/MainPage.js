import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './mainpage.css';

const MainPage = () => {
  return (
    <>
      <div className="mainpage">
        <h1>This is MainPage</h1>
        <Link className='link' to='/shop'>
          <Button color="primary" variant="contained">
            Enter Shop
          </Button>
        </Link>
      </div>
    </>
  );
};

export default MainPage;
