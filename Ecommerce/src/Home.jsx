import React, { useEffect, useState } from 'react';


import Products from './Component/Products'
import Footer from './Component/Footer'

function Home() {

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
    <> 
    
      <Products allProduct = {products} loading = {loading}/>
       <Footer/> 

      
      </>
  )
}

export default Home