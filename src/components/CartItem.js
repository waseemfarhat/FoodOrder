import './CartItem.css'
import { useContext } from 'react';
import CartContext from './CartContext';


const CartItem = (props) => {

  const { currentData } = useContext(CartContext)
  const { AddQuanitiytoitemhandler } = useContext(CartContext)
  const { RemoveQuanitiytoitemhandler } = useContext(CartContext)
  return (




    <div className='cartitemskabaad'>

      {currentData.map((everysinglemeal) => {


        return <li className='cart-item'>
          <div className='Summaryandother'>
            <h1>{everysinglemeal.name}</h1>

            <div className='summary'>
              <span className='price'>{(everysinglemeal.price * (everysinglemeal.UserinputQuanity + everysinglemeal.quantity)).toFixed(2)}</span>
              <span className='amount'>{everysinglemeal.quantity + everysinglemeal.UserinputQuanity}</span>
            </div>
          </div>

          <div className='actions'>
            <button onClick={() => RemoveQuanitiytoitemhandler(everysinglemeal.id)}>-</button>
            <button onClick={() => AddQuanitiytoitemhandler(everysinglemeal.id)}>+</button>
            <div>

              <button onClick={props.Showornot}>close</button>
              <button>order</button>
            </div>
          </div>
        </li>
      })}



    </div>

  );
};

export default CartItem;