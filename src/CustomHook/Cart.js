import { useContext } from "react";
import { CartContext} from '../Context/CartContext'

const useCart = () => {
    return useContext(CartContext)
}

export default useCart