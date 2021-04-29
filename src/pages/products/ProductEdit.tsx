import axios from 'axios';
import React, { SyntheticEvent, useState,useEffect, useRef } from 'react'
import { Redirect } from 'react-router';
import ImageUpload from '../../components/ImageUpload';
import Wrapper from "../../components/Wrapper";

const ProductEdit = (props : any) => {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('')
    const [image,setImage] = useState('');
    const [price,setPrice] = useState(0);
    const [redirect,setRedirect] = useState(false);
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        (
            async () => {
                const { data } = await axios.get(`products/${props.match.params.id}`)
                // console.log(data);
                setTitle(data.title)
                setDescription(data.description)
                setImage(data.image)
                setPrice(data.price)
            }
        )()
    }, [])

    const submit = async(e:SyntheticEvent) => {
        e.preventDefault();

        await axios.put(`products/${props.match.params.id}`,{
            title,
            description,
            image,
            price
        });

        setRedirect(true)
    }

    const updateImage = (url: string) => {
        if(ref.current){
            ref.current.value = url;
        }
        setImage(url);
    }

    if(redirect){
        return <Redirect to="/products" />
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="">Title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        defaultValue={title}
                        onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="">Description</label>
                    <textarea 
                        className="form-control" 
                        defaultValue={description}
                        onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="">Image</label>
                    <div className="input-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            ref={ref}
                            defaultValue={image}
                            onChange={e => setImage(e.target.value)} />
                        <ImageUpload uploaded={updateImage}/>
                    </div>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="">Price</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        value={price}
                        onChange={e => setPrice(parseInt(e.target.value))} />
                </div>
                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    )
}

export default ProductEdit
