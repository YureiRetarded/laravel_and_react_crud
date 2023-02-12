import React from 'react';
import ProductItem from "./ProductItem";

const ProductList = ({products}) => {
    return (
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product)=><ProductItem product={product}/>)}
                </tbody>
            </table>
    );
};

export default ProductList;
