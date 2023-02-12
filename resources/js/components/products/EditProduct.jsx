import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

const EditProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const {id} =  useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([])
    const test=() => {
        axios.get('api/get/1').then((response) => {
            console.log(response.data)
        });
    }
    return (
        <div className='products'>
            <form className='form'>
                <label>Name</label>
                <input name='name' value={name} onChange={event => setName(event.target.value)}/>
                <label>Description</label>
                <input name='description' value={description} onChange={event => setDescription(event.target.value)}/>
                <label>Price</label>
                <input type='number' name='price' value={price} onChange={event => setPrice(event.target.value)}/>
                {/*<button onClick={(event) => test(event)}>*/}
                {/*    Edit*/}
                {/*</button>*/}
            </form>
            <button onClick={test}>a</button>
        </div>
    );
};

export default EditProduct;
