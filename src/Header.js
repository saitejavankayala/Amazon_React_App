/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }


    return (
         <nav className="header">
            {/* logo on the left */}
            <Link to="/">
            <img 
            className="header__logo" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
            </Link>
            {/* Search Box */}
            <div className="header__search">
            <input className="header__searchInput" type="search"/>
            <SearchIcon className="header__searchIcon"/>
            </div>
            {/* 3 Links */}
            <div className="header__Nav">
            {/* 1st Link */}
            <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
            {/* 2nd Link */}
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__option__one">Returns</span>
                    <span className="header__option__two">& orders</span>
                </div>
            </Link>
           
            {/* 3rd Link */}
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__option__one">Your</span>
                    <span className="header__option__two">Prime</span>
                </div>
            </Link>
           
            {/* 4th Link */}
            <Link to="/checkout" className="header__link" >
                <div className="header__optionBasket">
                    <div  className="header__optionBasket__cart">
                    <span className="header__option">{basket?.length}</span>
                  <ShoppingCartOutlinedIcon  style={{ fontSize: 35 }}/>
                  </div>
                  <span className="header__optionBasket__text">Cart</span>

                </div>
            </Link>
                
            </div>
            {/* Basket Icon with Number */}
        </nav>
    )
}

export default Header
