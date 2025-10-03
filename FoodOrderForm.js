import React, { useState, useEffect } from "react";

function FoodOrderForm( {orderWhenClick} ) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [order, setOrder] = useState('');
  
  const totalOrderText = orderWhenClick.map(
    item => `${item.quantity} x ${item.name} - $${item.price * item.quantity}`
  )
  const totalPrice = orderWhenClick.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  const onEventHandler = (setState) => ({ target }) => { setState( target.value )}


  const onHandleSubmit = (e) => {
    e.preventDefault();
    alert(`Order Successful! \n Your order was ${totalOrderText} \n Please show your confirmation number for pickup.`)
  }
  return (
    <form onSubmit={onHandleSubmit}>
    <label htmlFor='name' >Name:</label>
    <input type='text' name='name' id='name' value={name} onChange={onEventHandler(setName)}></input>
    <label htmlFor='phone' >Phone:</label>
    <input type='text' id='phone' name='phone' value={phone} onChange={onEventHandler(setPhone)}></input>
    <label htmlFor='address' >Address:</label>
    <input type='text' id='address' value={address} name='address' onChange={onEventHandler(setAddress)}></input>
    <label htmlFor='order' >Order:</label>
    <textarea value={totalOrderText} readOnly/>

    <p>{`Total Price: ${totalPrice.toFixed(2)}`}</p>

    <button type='submit'>Submit Order</button>
    </form>
  )
}

export default FoodOrderForm;
