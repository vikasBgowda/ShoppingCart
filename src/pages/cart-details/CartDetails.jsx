import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import { SingleCartStyle } from './SingleCartStyle';

export const CartDetails = () => {

  const {CartItems , handleContinueShopping}=useContext(ProductContext);
  console.log(CartItems)
  return (
    <div className='flex flex-row justify-center items-center '>
      <div className='flex justify-start items-start border-2 h-[75%] w-[70%]'>
        <div className='m-10 gap-5'>
            {
              CartItems?.length>0?
              CartItems.map((SingleItem)=> <SingleCartStyle key={SingleItem.id} item={SingleItem}/>):
              <h1 className='text-2xl font-medium '>No Items in the cart contiune shopping .. !</h1>
            }
        </div>
      </div>
      <div className='border-2 p-4 m-5'>
          <div className='text-2xl p-10 '>
            <h1 className='text-2xl font-medium shadow-lg p-10 '>Order summary</h1>
          </div>
          <div className='p-5  m-3'>
            <div className='flex shadow-lg'>
              <h1 className='text-xl font-medium  p-5'>Total Price :</h1>
              <h2 className='text-xl font-medium  p-5'>${CartItems.reduce((acc,curr)=>acc+curr.totalprice,0).toFixed(2)}</h2>
            </div>
            <div className='flex gap-2 justify-around'>
              <button 
              onClick={()=>handleContinueShopping()}
              className='px-2 py-2 bg-black mt-4 text-white rounded-lg'>Continue Shopping</button>
              <button 
              disabled={CartItems?.length==0}
              className='disabled:bg-gray-300 px-2 py-2 bg-black mt-4 text-white rounded-lg'>CheckOut</button>
            </div>
          </div>
      </div>
    </div>
  )
}
