import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import logo from '../../components/myForm/RozetkaCircle.svg';
import { BsArrowLeft, BsPatchCheck } from "react-icons/bs";
import { API_URL } from '../../constant'
// css=================================
import './style.css';

const ProductId = () => {
    let { cardId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getIdProd();
    }, [])

    console.log(product);
    const getIdProd = async () => {

        const request = await fetch(`${API_URL}/${cardId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await request.json();
        setProduct(data);

    }

    return (
        <div className='mainCard'>
            <div className='wrap__rozetka'>
                <img src={logo} alt="logo" />
            </div>
            <div className='container'>
                <div className='wrapp__contentcard'>
                    <div className='header-_card'>
                        <Link className='arrow__back' to={'/preview'}>{<BsArrowLeft />}</Link>
                        <h1 className='tiitle__card'>{product.name}</h1>
                    </div>
                    <div className='body__card'>
                        <img alt='product' src={product.photo}></img>
                        <div className='wrap__rightside'>
                            <BsPatchCheck />
                            <div className='availability'>
                                Є в наявності
                            </div>
                            <div className='price'>{product.price}<span>₴</span></div>
                            <div className='quantity'>Кількість: <span>{product.quantity}</span></div>
                        </div>
                    </div>
                    <div className='footer__card'>
                        <div className='wrap__titleDiscription'>
                            <span>Опис</span>
                            <h1>{product.name}</h1>
                        </div>
                        <div>
                            {product.description}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ProductId; 