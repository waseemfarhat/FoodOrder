import './Navbar.css'
import { FontAwesomeIcon } from
  '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import CartContext from './CartContext';
library.add(faCartShopping);





const Navbar = (props) => {
  const { currentData } = useContext(CartContext)


  const [quantitcontroller, SetQuantitycontroller] = useState(0)
  useEffect(() => {
    let Totalquantity = 0
    SetQuantitycontroller(() => {
      for (let i = 0; i < currentData.length; i += 1) {
        Totalquantity += currentData[i].quantity
      }
      return Totalquantity
    })



  }, [currentData])




  return (
    <div className='Navbar'>
      <img src='wasim-dhaaba-high-resolution-logo-black-removebg-preview.png' alt='stylesheet'></img>
      <div className='addtocart'>
        <button onClick={props.Clicktoshowcart} >Your Cart</button>
        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />

        <label>{quantitcontroller}</label>
      </div>
    </div>

  )

}

export default Navbar
