import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useEffect, useState } from "react";



const URL = 'https://fakestoreapi.com/products/'

const Delete = (props) => {
    const [state, setState] = useState([])


    const getData = async () => {

        const response = await axios.get(URL)
        setState(response.data)
    }

    useEffect(() => {
        getData()
    }, [])

    const removeData = (id) => {

        axios.delete(`${URL}/${id}`).then(res => {
            const del = state.filter(state => id !== state.id)
            setState(del)
        })
        console.log(state)
    }

    return (
        <>
            <Navbar length={props.length} />
            <h1 className='text-center mt-3 p-3 mb-2 bg-info text-white' id='title'>My Carts</h1>

            <section className='py-4 container'>
                <div className='d-flex row justify-content-center'>
                    {state.map((spot, index) => {
                        return (
                            <>
                                <div className="w-25 m-2 p-2 rounded-3 card">
                                    
                                                <img src={spot.image}/>
                                               <label><strong>Title: </strong><p>{spot.title}</p></label> 
                                               <label><strong>Description:</strong> <p>{spot.description}</p></label> 
                                               <label><strong>Price:</strong> <p>&#x00024;{spot.price}</p></label>                                                
                                                <p className='operation'>
                                                    <button type="button" className="btn btn-primary" onClick={() => removeData(spot.id)}>Delete</button></p>
                                           
                                </div>
                            </>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Delete;
