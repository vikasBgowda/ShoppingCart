import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContext';

export const SingleProductDesign = ({singleItem}) => {

        const navigate=useNavigate();
        const {handleAddToCart,CartItems}=useContext(ProductContext)
        // handling on click of the view details product
        const handleViewDetails=(singleProductId)=>{
    
            navigate(`/product-details/${singleProductId}`)
            console.log(singleProductId)
        }

  return (
    <div className='relative group border border-cyan-700 p-6 cursor-pointer m-2 rounded-lg'>
        <div className='overflow-hidden aspect-w-1 aspect-h-1 group-hover:aspect-h-2 group-hover:aspect-w-2'>
            <img src={singleItem.thumbnail} alt={singleItem.title} 
            className='object-cover w-full h-full transition-all duration-300 transform group-hover:scale-110'
            />
        </div>
        <div className='flex justify-between items-center font-semibold m-2'>
            <div className=''>
            <h1 className=' w-[100px] overflow-hidden text-ellipsis whitespace-nowrap'>{singleItem.title}</h1>
            </div>
            <div>
                <h1>${singleItem.price}</h1>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <div className='p-2 m-2'>
            <button 
            onClick={()=>handleViewDetails(singleItem.id)}
            className='bg-gray-800 text-white px-2 py-3 rounded-lg'>View Detail</button>
            </div>
            <div>
            <button 
            onClick={()=>handleAddToCart(singleItem)}
            disabled={CartItems.findIndex(item=>item.id===singleItem.id)>-1}
            className='disabled:bg-gray-300 bg-gray-800 text-white px-2 py-3 rounded-lg' >Add to cart</button>
            </div>
        </div>
        
    </div>
  )
}
