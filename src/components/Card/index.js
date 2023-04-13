import { BsCart4 } from "react-icons/bs";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { API_URL } from '../../constant';
const Commodity = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const request = await fetch(`${API_URL}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await request.json();
        setProducts(data)
    }

    return (
        <div className='wrap__cards'>
            {products.map(cardItem => {
                return <Link to={`/preview/${cardItem.id}`}>
                    <div className='wrap__element' key={cardItem.id}>
                        <img alt="notebook" src={cardItem.photo} />
                        <h4 className='title__card'>
                            {cardItem.name}
                        </h4>
                        <div className='wrap__price__quantity'>
                            <div className='price'>
                                {cardItem.price}<span>₴</span>
                            </div>
                            <div className='quantity'>
                                Кількість: {cardItem.quantity}
                            </div>
                        </div>
                        <div className='wrap__foter_card'>
                            <i>
                                <BsCart4 />
                            </i>
                            <span>
                                Готовий до відправки
                            </span>
                        </div>
                    </div>
                </Link>
            })}

        </div>
    )
}

export default Commodity;