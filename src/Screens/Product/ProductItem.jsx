import React from 'react'

function ProductItem(props) {
  
   let { Id, title, image, category, description, price, rating} = props
  
   return(
    <div className="card">
        <div className="card-front">
            <img src={image?image:''} alt=""  className='card-img'/>
            <div className="card-content">
               <div className="title-sec">
                   <h4 className="card-title"> {title} </h4>
                   <p className="price">&#8377; {price} </p>
                   <p className="category"> {category}</p>
               </div>

            </div>
            
        </div>

        <div className="card-back">
            <button className='btn'>
                <i className="bi bi-cart"></i>
            </button>
        </div>
    </div>
   )
}

export default ProductItem
