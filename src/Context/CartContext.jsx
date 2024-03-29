import React,{ createContext , useEffect, useMemo, useState} from 'react'
import { toast } from 'react-toastify'

//context instance
export const CartContext = createContext()

function CartProvider(props) {
    const [cart,setCart] = useState(()=> {
        const storedCart = localStorage.getItem("cart")
        return storedCart ? JSON.parse(storedCart):[]
    })

    //memorized value of state
    const cartData = useMemo(()=>({
        cart
    }),[cart])

    // useEffect(() => {

    // },[cart])
    //add to cart
    const addToCart = (product) => {
        // console.log('cart',product)

        //store the data in localstorage

        let storedCart = JSON.parse(localStorage.getItem("cart")) || []
        let extItem = storedCart.find(item => item.id === product.id)
        console.log(`extItem=`,extItem)
        if(extItem){
            toast.warning("product already in cart")
        }else {
            let cartItem = {
                ...product,
                quantity:1
            }
            storedCart.push(cartItem)
            localStorage.setItem("cart", JSON.stringify(storedCart))
            toast.success("product added to cart")
            window.location.reload()
        }
    }

    //remove item from cart
    const removeCart = (id) => {
        //read cart  data
        let storedCart = JSON.parse(localStorage.getItem("cart")) || []
        //find the index of cart
        let cartIndex = storedCart.findIndex(item => item.id === id)
        //console.log('cartIndex=',cartIndex)

        //to remove item from cart
        storedCart.splice(cartIndex,1)

        //store after delete
        localStorage.setItem("cart" , JSON.stringify(storedCart))
        toast.success("Product deleted from cart")
        window.location.reload()
    }

    //clear cart
    const clearCart = () => {}

    //increment cart item quantity
    const incr = (id) => {}

    //decrement cart item quantity
    const decr = (id) => {}
  return (
       <CartContext.Provider value={{cartData,addToCart,removeCart,clearCart,incr,decr}}>
        {
            props.children
        }
       </CartContext.Provider>
  )
}

export default CartProvider
