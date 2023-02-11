import React from 'react';

const ProductItem = ({product}) => {
    return (
        <tr>
            <th>{product.id}</th>
            <th>{product.title}</th>
            <th>{product.description}</th>
            <th>{product.price}</th>
        </tr>
    );
};

export default ProductItem;
