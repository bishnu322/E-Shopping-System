import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../redux/cardSlice';


function Cart() {
  const cartProduct = useSelector( (state) => state.cart);

  const dispatch = useDispatch()
  const handleRemove = (productId) =>{
    dispatch(remove(productId))
  }
  // console.log(cartProduct)
  return (
    <div>
  
      <div className='cardWrapper'>
        {
          cartProduct.map((product) =>(
            <div className='cartCard' key={product.id}>
              <img src={product.image} alt={product.id}/>
              <h4>{product.title}</h4>
              <h4>${product.price}</h4>
              <button onClick={() => handleRemove(product.id)} className='removeButton'>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart;