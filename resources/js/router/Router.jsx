import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Products from "../components/products/Products";
import notFound from "../components/NotFound";
const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Products/>}/>
            <Route path='/*' element={<notFound/>}/>
        </Routes>
    );
};

export default Router;
