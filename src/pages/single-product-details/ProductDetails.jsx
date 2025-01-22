import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContext'

export const ProductDetails = () => {
  const [SingleItemDetails, setSingleItemDetails] = useState([])
  const [Loading, setLoading] = useState(false)
  const {id}=useParams();
  const{ handleContinueShopping,handleAddToCart }=useContext(ProductContext);
  const navigate=useNavigate();
  const fetchSingleProductDetails=async()=>{
    setLoading(true)
    try {
      const response=await fetch(`https://dummyjson.com/products/${id}`)
      const result=await response.json();
      console.log(result)
      if(result){
        setSingleItemDetails(result);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  }

  // fetching the details of the single products
  useEffect(()=>{
    fetchSingleProductDetails();
  },[id])



  if(Loading){
    return <h1 className='h-full w-full flex justify-center items-center '> Loading details of the product please wait ...! </h1>
  }
  return (
    <div className='p-5 m-5'>
        <div className='grid grid-cols-4'>
        <div className='border-2 m-10 h-[80%] w-[80%] col-span-2 overflow-hidden'>
            <img src={SingleItemDetails.thumbnail} alt="" 
            className='shadow-lg h-full w-full '
            />
          </div>
          <div className='col-span-2 m-10'>
            <div className='flex '>
            <div className='m-10 '>
              <h1 className='text-2xl font-semibold  '>{SingleItemDetails.title}</h1>
            </div>
            <div className='m-10'>
              <h1 className='text-3xl font-semibold  '>${SingleItemDetails.price}</h1>
            </div>
            </div >
            <div className='text-2xl m-10 font-light'>
              {SingleItemDetails.description}
            </div>
            <div className='m-10 p-5 gap-2'>
              <button 
              onClick={()=>handleAddToCart(SingleItemDetails)}
              className='bg-black px-10 py-4 rounded-lg text-white m-2'>Add to cart</button>
              <button 
              onClick={()=>handleContinueShopping()}
              className='bg-black px-10 py-4 rounded-lg text-white'>Continue Shopping</button>
            </div>
          </div>
        </div>

    </div>
  )
}