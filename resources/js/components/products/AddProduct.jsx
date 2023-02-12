import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const AddProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
    const upload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name)
        formData.append('description', description)
        formData.append('price', price)
        await axios.post('api/add_product/', formData)
            .then(() => {
                navigate('/')
            })
            .catch(({response}) => {

            })

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
                <button onClick={(event) => upload(event)}>
                    Create
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
