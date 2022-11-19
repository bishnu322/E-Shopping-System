import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import {add }  from '../redux/cardSlice';
import { useDispatch,useSelector } from 'react-redux';
import {fetchProduct, STATUSES} from '../redux/productSlice';
import Second from './test/second';



function Home() {
    let {data: products, status} = useSelector((state) => state.product)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct())
      
    },[]);

    const handleAdd = (products) => {
           dispatch(add(products));
    }
    if(status === STATUSES.LOADING){
        return <h4>loading....</h4>
    }
    return (
        <div className='parentContainer'>

            {
                products.map((item) => (
                    <div className="container" key={item.id}>
                        <div className='axiosImg'><img src={item.image} alt={item.id} /></div>
                        <h6>{item.title}</h6>
                        <h5>Price :$ {item.price}</h5>
                        <button onClick={() => handleAdd(item)}>Add to Cart</button>
                    </div>
                ))
            }

          
        </div>
    )
}

export default Home