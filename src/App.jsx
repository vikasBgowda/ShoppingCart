import { Route, Routes } from "react-router-dom"
import { AllProductList } from "./pages/product-list/AllProductList"
import { CartDetails } from "./pages/cart-details/CartDetails"
import { ProductDetails } from "./pages/single-product-details/ProductDetails"



function App() {
  return (
    <>
        <Routes>
          <Route path="/product-list" element={<AllProductList/>} />
          <Route path="/cart" element={<CartDetails/>}/>
          <Route path="/product-details/:id" element={<ProductDetails/>}/>
        </Routes>
    </>
  )
}

export default App
