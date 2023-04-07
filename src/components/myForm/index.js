import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// components=====================
import PasswordInput from '../paswordInput';
// css=================================
import './style.css';
import logo from './RozetkaCircle.svg';
function MyForm() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordShown, setIsPasswordShown] = useState(false)
    const Navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            username: name,
            pasword: password
        }


        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/pasword/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const json = await response.json();
            if (!json.token) {
                throw new Error(json.message)
            } else {
                localStorage.setItem("token", json.token);
            }

        }
        fetchData()
        const myToken = localStorage.getItem('token');
        (!myToken) ? Navigate('/login') : Navigate('/product');

    };

    return (
        <form className='myForm' onSubmit={handleSubmit}>
            <div className='myForm__content'>
                <div className='input_wrap'>
                    <div className='wrap__rozetka'>
                        <div className='rozetka__img'>
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
                </div>
                <div className='input_wrap'>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="User Name" />
                </div>

                <PasswordInput isPasswordShown={isPasswordShown} setIsPasswordShown={setIsPasswordShown} value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className='input_wrap'> <button type="submit" className='form__button'>Login</button></div>

            </div>

        </form>
    );
}

export default MyForm;
