import React from 'react';

const ProductItem = ({product}) => {
    return (
        <div className='productItem'>
            <div>
                {product.id}
            </div>
            <div>
                {product.title}
            </div>
            <div>
                {product.description}
            </div>
            <div>
                {product.price}
            </div>
        </div>
    );
};

export default ProductItem;
