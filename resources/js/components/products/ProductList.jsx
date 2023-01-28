import React from 'react';
import ProductItem from "./ProductItem";

const ProductList = ({products}) => {
    return (
        <div>
            {products.map((product)=><ProductItem product={product}/>)}
        </div>
    );
};

export default ProductList;
