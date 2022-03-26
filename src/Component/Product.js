import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import Itemcard from './Itemcard';
const Product = () => {
    const [state, setState, count] = useState([])
    useEffect(() => {
        getProduct();
    }, []);
    const getProduct = async () => {
        await axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                console.log(response.data);
                setState(response.data);
                console.log(state)
            })
            .catch((error) => {
                console.log(error.response.data);
            })
    }
    return (
        <>        
        <Navbar length={state.length} />
            <h2 className='text-center mt-3 p-3 mb-2 bg-info text-white'>Our Product</h2>
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                    {state.map((spot, index) => {
                        return (
                            <Itemcard img={spot.image} title={spot.title} desc={spot.description} price={spot.price} />
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Product;