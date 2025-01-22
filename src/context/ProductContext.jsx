import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const ProductContext=createContext(null);


const ProductContextProvider = ({children}) => {
    const [ProductList, setProductList] = useState([])
    const [Loading, setLoading] = useState(false)
    const [CartItems, setCartItems] = useState([])
    const navigate=useNavigate();

    // continue button
    const handleContinueShopping=()=>{
        navigate('/product-list')
    }

    // fetching details on the reload of the page
    const fetchAllProducts=async()=>{
        setLoading(true);
        try {
            const response=await fetch('https://dummyjson.com/products');
            const result=await response.json();
            if(result){
                setProductList(result.products);
                setLoading(false)
            }

        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    // Adding items to the cart
    const handleAddToCart=(SingleItemDetails)=>{  
        let cpyCartItem=[...CartItems];
        const index=cpyCartItem.findIndex((item)=>item.id==SingleItemDetails.id);
        if(index==-1){
            cpyCartItem.push({
                ...SingleItemDetails,
                quanity:1,
                totalprice:SingleItemDetails.price

            })
        }else{
            cpyCartItem[index]={
                ...cpyCartItem[index],
                quanity:cpyCartItem[index].quanity+1,
                totalprice:(cpyCartItem[index].quanity+1)*SingleItemDetails.price
            }
        }
        setCartItems(cpyCartItem);
        console.log("cart items = ",CartItems)
        localStorage.setItem('cartItems',JSON.stringify(cpyCartItem))
        navigate('/cart')
    }

    // remove or reduce the items
    const RemoveItemsFromCart=(item,isRemove)=>{
        let cpyItem=[...CartItems];
        const index=cpyItem.findIndex(single=>single.id===item.id);

        if(isRemove){
            cpyItem.splice(index,1);
        }else{
            cpyItem[index]={
                ...cpyItem[index],
                quanity:cpyItem[index].quanity-1,
                totalprice:(cpyItem[index].quanity-1) * item.price
            }
        }
        setCartItems(cpyItem);
        localStorage.setItem('cartItems',JSON.stringify(cpyItem));
    }


    // doing the initial calls on the initital render of the page
    useEffect(()=>{
        fetchAllProducts();
        const newCartitems=localStorage.getItem('cartItems');
        const parsedCartItems = newCartitems ? JSON.parse(newCartitems) : [];
        setCartItems(parsedCartItems)
    },[])
  return (
        <ProductContext.Provider value={{ProductList ,RemoveItemsFromCart, Loading ,handleContinueShopping , handleAddToCart,CartItems, setCartItems}}>
            {children}
        </ProductContext.Provider>
  )
}
export default ProductContextProvider;
