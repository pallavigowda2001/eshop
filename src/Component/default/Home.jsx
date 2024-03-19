import axios from 'axios'
import { Outlet } from 'react-router-dom'
import React,{ useState,  useEffect} from 'react'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'

const url = 'https://fakestoreapi.com'

function Home() {
  const [category,setCategory] = useState([])

  //read all category
  const readCategory = async () => { 
    await axios.get(`${url}/products/categories`)
    .then(res => {
      console.log(`res=`,res.data)
      setCategory(res.data)
    })

    .catch(err => toast.error(err.message))
  }

  //call the method
  useEffect(() => {
    readCategory()
  },[])
  return (
    <div className='container'>
      <div className="row">
        <div className="col">
          <h1 className="title">Discover Our Products</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="tabmenu">
            {
              category?.map((item,index) => {
                return(
                  <li className="tab-item" key={index}>
                    <NavLink to={`/?category=${item}`} className="tab-link">
                      {item}
                    </NavLink>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Home
