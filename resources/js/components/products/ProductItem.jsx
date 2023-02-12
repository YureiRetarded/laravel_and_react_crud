import React from 'react';
import {useNavigate} from "react-router-dom";

const ProductItem = ({product}) => {
    const navigate = useNavigate();
    const edit=()=>{
        navigate('/product/edit/'+product.id)
    }
    return (
        <tr>
            <th>{product.id}</th>
            <th>{product.title}</th>
            <th>{product.description}</th>
            <th>{product.price}</th>
            <th>Delete</th>
            <th onClick={edit}>Edit</th>
        </tr>
    );
};

export default ProductItem;
