import React, { Fragment, useState } from 'react'
import './FoodContainer.css'
import CartContext from './CartContext';
import { useContext } from 'react';


const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];






const FoodsContainer = () => {
  const [UserQuantity, SetUserQuantity] = useState(0)
  const { AddDataHandler } = useContext(CartContext);


  const handlerAddClick = (mealData) => {
    AddDataHandler({ ...mealData, UserinputQuanity: UserQuantity })
  };

  const UserInputQuanityHandler = (event) => {
    const UserValue = parseInt(event.target.value, 10);
    SetUserQuantity(UserValue)
  }
  return (

    <Fragment>
      <div className='Foodcontainer'>
        <ol>
        {DUMMY_MEALS.map((singlemeal) => (
          <li key={singlemeal.id}>
            <div className='menuitems'>
              <h1>{singlemeal.name}</h1>
              <p>{singlemeal.description}</p>
              <span>{singlemeal.price}</span>
            </div>

            <div className='button-and-quantity'>
              <label htmlFor="quantity">Quantity:</label>
              <input type="number" id="quantity" value={UserQuantity[singlemeal.name]} onChange={UserInputQuanityHandler} />
              <button onClick={() => handlerAddClick({
                id: singlemeal.id,
                name: singlemeal.name,
                price: singlemeal.price,
              })}>
                +Add
              </button>
            </div>
          </li>
        ))}
        </ol>
      </div>
    </Fragment>
  );
};

export default FoodsContainer;
