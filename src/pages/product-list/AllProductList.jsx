import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext';
import { SingleProductDesign } from './SingleProductDesign';




export const AllProductList = () => {

  const {ProductList , Loading}=useContext(ProductContext);

  console.log(ProductList)
  // Loading is shown when the data is being fetched
  if(Loading){
    return <h1 className='text-2xl flex justify-center items-center font-bold'>Loading products please wait !!!</h1>
  }

  return (
    <div>
      <h1 className='flex text-3xl font-extrabold m-5 p-3 items bg-center justify-center'>Product-Items</h1>
      <div className='text-center grid grid-cols-4 gap-10 text-xl font-semibold justify-around items-center'>
        {
          ProductList.map((singleItem)=>  <SingleProductDesign key={singleItem.id} singleItem={singleItem}/>)
        }
      </div>
    </div>
  )
}
