import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../useFetch';
import './itemdetails.css';
import Rating from '@material-ui/lab/Rating';
import CircularProgress from '@material-ui/core/CircularProgress';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';

const ItemDetail = () => {
  const { id } = useParams();
  const {
    error,
    isPending,
    data: item,
  } = useFetch(`http://localhost:8001/products/${id}`);

  const [num, setNum] = useState(1);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleChange = (event) => {
    setNum(event.target.value);
  };

  // adding item to local storage
  const handleClick = () => {
    // if local storage is empty create list products with these items
    if (!localStorage.getItem('products')) {
      localStorage.setItem('products', JSON.stringify(
        [
          {
            "id" : item.id,
            "title": item.title,
            "amount": num,
            "price": item.price,
            "photo": item.first_image
          }
        ]
      ))
    } else {
      // if item is already in localstorage, change amount of it
      let storageItems = JSON.parse(localStorage.getItem('products'))

      if (storageItems.filter(items => items.id === item.id).length > 0){
        let i = 0
        while(i < storageItems.length) {
          if (storageItems[i].id === item.id) {
            storageItems[i].amount += num
          }
          i++ 
        }
        localStorage.setItem('products', JSON.stringify(storageItems))
      } else {
        // if there is no item, add new
        let newItem = {
          "id" : item.id,
          "title": item.title,
          "amount": num,
          "price": item.price,
          "photo": item.first_image
        }
        console.log('=')
        storageItems.push(newItem)
        localStorage.setItem('products', JSON.stringify(storageItems))
      }
    }
  }

  return (
    <>
      {error && <div>{error}</div>}
      {isPending && (
        <div className="loading">
          <CircularProgress />
        </div>
      )}
      {item && (
        <div className="detail-container">
          <div className="det-info">
            <div className="det-left">
              <div className="main-photo">
                <img src={item.first_image} alt='big'></img>
              </div>
              <div className="small-photos">
                <div className="iteme">
                  <div className="small-photo">
                    <img src={item.second_image} alt='small'></img>
                  </div>
                  <div className="small-photo">
                    <img src={item.second_image} alt='small'></img>
                  </div>
                </div>
                <div className="iteme">
                  <div className="small-photo">
                    <img src={item.second_image} alt='small'></img>
                  </div>
                  <div className="small-photo">
                    <img src={item.second_image} alt='small'></img>
                  </div>
                </div>
                <div className="iteme">
                  <div className="small-photo">
                    <img src={item.second_image} alt='small'></img>
                  </div>
                  <div className="small-photo">
                    <img src={item.second_image} alt='small'></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="det-right">
              <div className="det-title">
                <h1>{item.title}</h1>
                <div className="price-rating">
                  <p>{item.price} USD</p>
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating name="read-only" value={4} />
                  </Box>
                </div>
                <p className="sezzle">
                  or 4 interest-free payments of 100USD with sezzle
                </p>
                <div className="buy-button">
                  <FormControl className="form-control">
                    <InputLabel id="num"> Amount</InputLabel>
                    <Select
                      variant="outlined"
                      labelId="num"
                      value={num}
                      onChange={handleChange}
                    >
                      {numbers.map((numb) => (
                        <MenuItem value={numb} key={numb}>{numb}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Button className="but" onClick={handleClick}>Add to bag</Button>
                </div>
              </div>
              <div className="accord">
                <Accordion>
                  <AccordionSummary
                    className="accordion"
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h2>Product Description</h2>
                  </AccordionSummary>
                  <AccordionDetails className="accordion">
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.Quaerat quas ullam quidem omnis adipisci
                      quia. Blanditiis vero voluptas iusto voluptatum. Officia
                      quia in placeat.Quaerat quas ullam quidem omnis adipisci
                      quia. Blanditiis vero voluptas iusto voluptatum. Officia
                      quia in placeat.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    className="accordion"
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <h2>Our better editing guarantee</h2>
                  </AccordionSummary>
                  <AccordionDetails className="accordion">
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    className="accordion"
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <h2>Build quality and materials</h2>
                  </AccordionSummary>
                  <AccordionDetails className="accordion">
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.Quaerat quas ullam quidem omnis adipisci
                      quia. Blanditiis vero voluptas iusto voluptatum. Officia
                      quia in placeat.Quaerat quas ullam quidem omnis adipisci
                      quia. Blanditiis vero voluptas iusto voluptatum. Officia
                      quia in placeat.Quaerat quas ullam quidem omnis adipisci
                      quia. Blanditiis vero voluptas iusto voluptatum. Officia
                      quia in placeat.Quaerat quas ullam quidem omnis adipisci
                      quia. Blanditiis vero voluptas iusto voluptatum. Officia
                      quia in placeat.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    className="accordion"
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <h2>Shipping information</h2>
                  </AccordionSummary>
                  <AccordionDetails className="accordion">
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.Quaerat quas ullam quidem omnis adipisci
                      quia. Blanditiis vero voluptas iusto voluptatum. Officia
                      quia in placeat.Quaerat quas ullam quidem omnis adipisci
                      quia. Blanditiis vero voluptas iusto voluptatum. Officia
                      quia in placeat.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    className="accordion"
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <h2>Warranty</h2>
                  </AccordionSummary>
                  <AccordionDetails className="accordion">
                    <Typography>
                      Quaerat quas ullam quidem omnis adipisci quia. Blanditiis
                      vero voluptas iusto voluptatum. Officia quia in
                      placeat.Quaerat quas ullam quidem omnis adipisci quia.
                      Blanditiis vero voluptas iusto voluptatum. Officia quia in
                      placeat.Quaerat quas ullam quidem omnis adipisci quia.
                      Blanditiis vero voluptas iusto voluptatum. Officia quia in
                      placeat.Quaerat quas ullam quidem omnis adipisci quia.
                      Blanditiis vero voluptas iusto voluptatum. Officia quia in
                      placeat.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
