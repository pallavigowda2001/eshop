import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const url = 'https://fakestoreapi.com'
function ProductCart() {
  const [cart , setCart] = useState([])

  //read the carts data

  const readCart = async () => {
    await axios.get(`${url}/carts`)
    .then(res => {
      setCart(res.data[0])
    }).catch(err => toast.error(err.responce.data.msg))
  }

  useEffect(() => {
    readCart()
  },[])
  return (
    <div className='container'>
        <div className="row">
          <div className="col">
            <h3>cart Info</h3>
            <table className='table'>
               <thead>
                  <tr>
                    <th>ProductId</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                
               </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

export default ProductCart
