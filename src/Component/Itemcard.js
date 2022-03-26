import React, { useState } from 'react'

const Itemcard = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
                <img src={props.img} className='card-img-top img-fluid' />
                <div className='card-body'>
                    <h5 className='card-title'>{props.title}</h5>
                    <h5 className='card-title'>&#x00024;{props.price}</h5>
                    <p className='card-text'>{props.desc}</p>
                    <p className='font-weight-bold'>Item added: {count}</p>
                    <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Itemcard;