import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Products from "../components/products/Products";
import NotFound from "../components/NotFound";
import AddProduct from "../components/products/AddProduct";
import EditProduct from "../components/products/EditProduct";
const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Products/>}/>
            <Route path='/add' element={<AddProduct/>}/>
            <Route path='/product/edit/:id' element={<EditProduct/>}/>
            <Route path='/*' element={<NotFound/>}/>
        </Routes>
    );
};

export default Router;
