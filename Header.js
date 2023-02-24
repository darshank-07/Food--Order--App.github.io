import React from 'react'
import { } from "@mui/material";
import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material';


function Header() {
    return <header>
        <img src="https://cdn.dribbble.com/users/7004524/screenshots/15197928/food-delivery.jpg" alt="" className="logo" />

        <div className="inputBox">
            <SearchRounded className="searchIcon" />
            <input type="text" placeholder="Search" />
        </div>
    <div className="shoppingCart">
          <ShoppingCartRounded className="cart" />
          <div className="cart_content">
            <p>2</p>
          </div>
          </div>
  <div className="profilecontainer">
            <div className="imagBoX">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVi-cR4dMAo4Df1f8BZO5s7x9CdWFl_mUtVltKwIXQeazQ33HNYsgXmQzgc110pJD_PrQ&usqp=CAU" alt="" />
            </div>
            
            <h className="userName"><b>Dewanand</b></h>
        </div>
        <div className="toggleMenu">
        <BarChart className="toggleIcon" />
        </div>
       
        
    </header>
  )
}

export default Header ;
