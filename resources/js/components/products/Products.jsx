import React, {useEffect, useState} from 'react';
import ProductList from "./ProductList";

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('api/').then((response) => {
            setProducts(response.data);
        });
    }, [])


    return (
        <div className='products'>
            <ProductList products={products}/>
        </div>
    );
};

export default Products;
