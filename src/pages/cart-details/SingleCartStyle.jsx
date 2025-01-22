import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'

export const SingleCartStyle = ({item}) => {
    const {handleAddToCart , RemoveItemsFromCart}=useContext(ProductContext)
  return (
    <div>
        <div className=' grid grid-cols-3 gap-2'>
            <div className='col-span-1'>
                <div className='m-2 p-2 h-30 w-28'>
                    <img
                    className='h-full w-full' 
                    src={item.thumbnail} alt={item.title} />
                
                </div>
            </div>
    
            <div className='col-span-2 grid grid-cols-4 '>
                <div className='col-span-2 m-5'>
                    <h1 className='text-xl  items-start font-extralight '> {item.title}</h1>
                    <button
                    onClick={()=>RemoveItemsFromCart(item,true)}
                    className='bg-black px-2 py-1 rounded-lg text-white mt-5 '>REMOVE</button>
                </div>
                <div className='col-span-2 flex flex-col justify-end items-end m-4'>
                    <div>
                        <h1 className='font-medium m-4 p-1'>$ {(item.totalprice).toFixed(2)}</h1>
                    </div>
                    <div className='flex gap-2' >
                        <button 
                        onClick={()=>handleAddToCart(item)}
                        className='bg-black px-2 py-1 rounded-lg text-white '>+</button>
                        <h2>{item.quanity}</h2>
                        <button 
                        disabled={item.quanity==1}
                        onClick={()=>RemoveItemsFromCart(item,false)}
                        className='disabled:bg-gray-300 bg-black px-2 py-1 rounded-lg text-white ' >-</button>
                    </div>
                </div>
            </div>
        </div>
        <hr  className='border-2'/>
    </div>
  )
}
