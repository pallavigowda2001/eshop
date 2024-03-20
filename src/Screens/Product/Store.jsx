import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import ProductItem from './ProductItem'


const url = 'https://fakestoreapi.com'

function Store() {
  const [products,setProducts] = useState([])

  //read all products

  const readProducts = async () => {
    await axios.get(`${url}/products`)
    .then(res => {
      console.log(`products=`,res.data)
      setProducts(res.data)

    }).catch(err => toast.error(err.message))
  }

  useEffect(()=> {
    readProducts()
  },[])
  return (
    <div className='container'>
       <div className="row">
        <div className="col">
          <div className="product-container">
            {
              products?.map((item,index)=> {
              return(
                <ProductItem key={index} {...item}/>
              )
              })
            }
          </div>
        </div>
       </div>
    </div>
  )
}

export default Store
