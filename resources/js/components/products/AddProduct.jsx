import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const AddProduct = () => {
    const {name, setName} = useState('');
    const {description, setDescription} = useState('');
    const {price, setPrice} = useState(0);
    const navigate = useNavigate();

    const createProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('price', price)
        await axios.post('api/add_product/', formData)
            .then(({data}) => {
                // toast.fire({
                //     icon:'success',
                //     title:'Successfully'
                // })
                // navigate('/')
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
                <input type='number' name='price' value={price} onChange={}/>
                <button onClick={(event) => createProduct(event)}>
                    Create
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
