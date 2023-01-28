import React, {useState} from 'react';
import ProductList from "./ProductList";

const Products = () => {
    const [products,setProducts]=useState([
        {id:1,title:'One',description:'One more',price:123},
        {id:2,title:'Two',description:'Two more',price:321},
        {id:3,title:'Three',description:'Three more',price:456},
        {id:4,title:'Four',description:'Four more',price:654},
        {id:5,title:'Five',description:'Five more',price:789},
        {id:6,title:'Six',description:'Six more',price:987},
        {id:7,title:'Seven',description:'Seven more',price:147},
        {id:8,title:'Eight',description:'Eight more',price:741},
        {id:9,title:'Nine',description:'Nine more',price:963},
        {id:10,title:'Ten',description:'Ten more',price:369},
    ])
    return (
        <div className='products'>
            <ProductList products={products}/>
        </div>
    );
};

export default Products;
