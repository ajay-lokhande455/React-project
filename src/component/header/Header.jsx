
import "./header.css"
// import { BiCart } from 'react-icons/bi'

// import {  MdAccountCircle } from 'react-icons/md'

const Header = () => {
  return (
    <header>
        <div className="sign-up">
            <p>Sign up and get 20% off to your first order. <a href="#"> Sign Up Now</a></p>
        </div>
        <div className="navbar flex">
            <div className="main-logo flex gap">
                <a href="#"><h2>SHOP.CO</h2></a>
            </div>
            <ul>
                <li><a href="">Shop</a></li>
                <li><a href="">On Sale</a></li>
                <li><a href="">New Arrivals</a></li>
                <li><a href="">Brands</a></li>
            </ul>
            <div className="search-bar">
                <input type="text" placeholder="Search for product"/>
            </div>
            <div className="hugs">
                {/* <a href="#"><BiCart/></a>
                <a href="#"><MdAccountCircle /></a> */}
            </div>
        </div>
    </header>

  )
}

export default Header
