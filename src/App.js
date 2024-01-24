import React,{ useState} from 'react';
import Navbar from './components/Navbar.js';
import './App.css'
import Cardsescription from './components/UI/Cardsescription.js';
import FoodsContainer from './components/FoodsContainer.js';
import CartItem from './components/CartItem.js';
import CartProvider from './components/CartProvider.js';


function App() {

 

    const [iscartshown,SetIscartShown]=useState(false)


    const ToshowCart=()=>{
      SetIscartShown(true)
    }
    const ToNotshowcart=()=>
    {
      SetIscartShown(false)
    }



return<CartProvider>
<img src='/restaurant-background-npda8c1hqh6d0xso.jpg' alt='stylesheet'></img>
<Navbar  Clicktoshowcart={ToshowCart} />
<Cardsescription />
<FoodsContainer />
{  iscartshown &&<  CartItem    Showornot={ToNotshowcart} />} 
</CartProvider>
}
export default App;
