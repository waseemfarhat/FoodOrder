import React, {  useEffect, useReducer, useState } from 'react';
import CartContext from './CartContext';






const CartProvider = (props) => {
  const [currentData, setCurrentData] = useState([]);


  const Functiontoperormaction=(currentstateofdata,action)=>{
    return currentData.map((everysinglemeal)=>{
      if(action.type==='Add' && action.id===everysinglemeal.id){
        return {...everysinglemeal,UserinputQuanity:everysinglemeal.UserinputQuanity+1}
      }
      else if(action.type==='Remove' && action.id===everysinglemeal.id){
        return {...everysinglemeal,UserinputQuanity:everysinglemeal.UserinputQuanity-1}
      }
      else{
        return {...everysinglemeal}
      }

    })


  }
  
  const [userstate,dispatchfunction]=useReducer(Functiontoperormaction,currentData)
  console.log('USer state is',userstate)
  useEffect(()=>{
    setCurrentData(userstate)
  },[userstate])

  
  












  console.log('CurrentData is', currentData)
  const AddDataHandler = (newMeal) => {
    setCurrentData((prevMeals) => {
      const existingMeal = prevMeals.find((meal) => meal.id === newMeal.id);
      if (existingMeal) {
        return prevMeals.map((exmeal) =>
          exmeal.id === newMeal.id ? { ...exmeal, quantity: exmeal.quantity + 1 } : exmeal
        );
      } else {
        return [...prevMeals, { ...newMeal, quantity: 1 }];
      }
    });
  };



  const AddQuanitiytoitemhandler = (Keyidd) => {
    dispatchfunction({
      id:Keyidd,
      type:'Add'
    })
     
    }
    
    const RemoveQuanitiytoitemhandler = (Keyid) => {
      dispatchfunction({
        id:Keyid,
        type:'Remove'
      })
      }





  return (
    <CartContext.Provider value={{ currentData, AddDataHandler,AddQuanitiytoitemhandler ,RemoveQuanitiytoitemhandler }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;