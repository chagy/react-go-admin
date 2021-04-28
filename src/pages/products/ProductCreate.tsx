import axios from 'axios';
import React, { SyntheticEvent, useState } from 'react'
import { Redirect } from 'react-router';
import Wrapper from "../../components/Wrapper";

const ProductCreate = () => {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('')
    const [image,setImage] = useState('');
    const [price,setPrice] = useState(0);
    const [redirect,setRedirect] = useState(false);

    const submit = async(e:SyntheticEvent) => {
        e.preventDefault();

        await axios.post('products',{
            title,
            description,
            image,
            price
        });

        setRedirect(true)
    }

    if(redirect){
        return <Redirect to="/products" />
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="">Title</label>
                    <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="">Description</label>
                    <textarea className="form-control" onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="">Image</label>
                    <input type="text" className="form-control" onChange={e => setImage(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="">Price</label>
                    <input type="text" className="form-control" onChange={e => setPrice(parseInt(e.target.value))} />
                </div>
                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    )
}

export default ProductCreate
