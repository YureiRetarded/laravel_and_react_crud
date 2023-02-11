import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className='navbar'>
            <Link className='btn_products' to='/'>Products</Link>
            <button className='btn_add_product'>
                <Link to='/add'>Add product</Link>
            </button>
        </div>
    );
};

export default NavBar;
