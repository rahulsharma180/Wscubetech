import React, { useEffect, useState } from 'react';
import Products from './Component/Products'
import Footer from './Component/Footer'
import ShoppingCart from './Component/ShoppingCart'

import Header from './Component/Header'; // Import your Header component
function Home() {


    const [open, setOpen] = useState(true)
  

    const [products, setProducts] = useState([]);
   
    const [loading, setloading] = useState(true)


    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then((res) => {
            return res.json();
        }).then((result)=>{
            setProducts(result.products)
            setloading(false)
            console.log(result)
        })
    
    }, [ ])
    
  return (
    <> <Header  open={open} setOpen={setOpen} />
      <ShoppingCart open={open} setOpen={setOpen}/>
      <Products allProduct = {products} loading = {loading}/>
       <Footer/> 

      
      </>
  )
}

export default Home