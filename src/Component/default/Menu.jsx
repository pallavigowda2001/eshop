import React  from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {

    const openSidebar = () => {
        document.getElementById("sideMenu").classList.add("active")
    }

    const closeSidebar = () => {
        document.getElementById("sideMenu").classList.remove("active")
    }
  return (
    <React.Fragment>
        <header>
        <nav className="navbar">
            <div className="container">
                <button className=" btn-menu" onClick={openSidebar}>
                    <i className="bi bi-list"></i>
                </button>

                <NavLink to={`/`} className="logo">React-E-shop</NavLink>

                <NavLink  to={`/cart`} className="cart">
                    <i className="bi bi-cart-fill"></i>
                </NavLink>
            </div>
        </nav>
    </header>

    {/* sidebar menu */}

    <div className="sidebar" id="sideMenu">
        <div className="sidebar-header">
            <h4>React-E-shop</h4>
            <button className="btn close" onClick={closeSidebar}>
                <i className="bi bi-x"></i>
            </button>
        </div>
        <div className="sidebar-body">
               <ul className="menulist">
                 <li className="menu-item">
                    <NavLink to={`/`}  className="menu-link">Home</NavLink>
                 </li>
                 <li className="menu-item">
                    <NavLink  to={`/about`} className="menu-link" >About</NavLink>
                 </li>
                 <li className="menu-item">
                    <NavLink  to ={`/`} className="menu-link">Contact</NavLink>
                 </li>
               </ul>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Menu
