import React from "react";
import SearchBar from "../searchBar/SearchBar";
import { NavLink } from "react-router-dom";




const Nav = (props) =>{
return(
    <div>
        <NavLink to='/home'>
            <button>Home</button>
        </NavLink>
        <NavLink to='/about'>
            <button>About</button>
        </NavLink>
       <SearchBar onSearch={props.onSearch} />
    </div>
)

}







export default Nav;