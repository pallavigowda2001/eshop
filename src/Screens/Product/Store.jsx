import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import ProductItem from './ProductItem'
import {useQuery} from '../../CustomHook/Query'


const url = 'https://fakestoreapi.com'

function Store() {
  const [products,setProducts] = useState([])

  let query = useQuery()
  console.log(`query=`, query.get('category'))

  //read all products

  const readProducts = async () => {
    await axios.get(`${url}/products`)
    .then(res => {
      console.log(`products=`,res.data)
      if(query.get('category')){
        let data = res.data.filter(item => item.category === query.get('category'))
      setProducts(data)
      }else {
        //if query categoryni snot present
        setProducts(res.data)
      }

    }).catch(err => toast.error(err.message))
  }

  useEffect(()=> {
    readProducts()
  },[products])
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
