import React from "react";
import Navbar from "./navbar";
import Searchfrom from "./searchfrom";
import "./header.css";
const Header =() => {
 return(
<div className="holder">
    <header className = 'header'>
        <Navbar/>
        <div className="header-content flex flex-c text-center text-white">
            <h2 className="header-title text-capitalize">
                find your book
            </h2> <br />
<p className="header-text fs-18 fw-3">
You search for your favorit book and keep reading
</p>
    <Searchfrom/>
        </div>
    </header>

</div>
 )   
}
export default Header